'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, Loader2 } from 'lucide-react';
import PageLayout from "@/components/layout/PageLayout";
import ModalAlert from "@/components/modal/ModalAlert";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import {
    ApiError,
    UserType,
    CheckpointType,
    UserCheckpointType,
    SpinHistoryType,
    SpinHistoryResponseType,
    ReceiveCheckpointRequestType,
    ReceiveCheckpointResponseType,
} from '../../types/type'
import coin from "@/img/coin.png";
import { formatCurrency } from "@/utils/util"
import { useSearchParams } from "next/navigation";

type CheckpointStatus = 'received' | 'available' | 'locked';
type TabType = 'all' | 'my' | 'redeemed';

export default function Home() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const userName = searchParams.get("userName");

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalErrorOpen, setIsModalErrorOpen] = useState<boolean>(false);
    const [rewardName, setRewardName] = useState<string>('');
    const [errorTitle, setErrorTitle] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const [userData, setUserData] = useState<UserType | null>(null);
    const [checkpoints, setCheckpoints] = useState<CheckpointType[]>([]);
    const [userCheckpoints, setUserCheckpoints] = useState<UserCheckpointType[]>([]);
    const [spinHistory, setSpinHistory] = useState<SpinHistoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    
    const observerTarget = useRef<HTMLDivElement>(null);

    const isApiError = (error: unknown): error is ApiError => {
        return typeof error === "object" && error !== null && "status" in error;
    };

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            if(userName && userName !== ""){
                try {
                    setLoading(true);
                    setError(null);

                    const user = await getOrCreateUser(userName);
                    localStorage.setItem("user_spinner", JSON.stringify(user))
                    setUserData(user)

                    const checkpoints = await fetchCheckpoints();
                    setCheckpoints(checkpoints);
                    localStorage.setItem("checkpoints_spinner", JSON.stringify(checkpoints))

                    const userCheckpoints = await fetchUserCheckpoints(user.id);
                    setUserCheckpoints(userCheckpoints);

                    await fetchSpinHistory(user.id, activeTab, 1, true);

                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setError(error instanceof Error ? error.message : 'Unknown error occurred');
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [userName]);

    useEffect(() => {
        if (userData && !loading) {
            setSpinHistory([]);
            setCurrentPage(1);
            setHasMore(true);
            fetchSpinHistory(userData.id, activeTab, 1, true);
        }
    }, [activeTab]);

     // Infinite scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log("entries : ", entries)
                console.log("hasMore : ", hasMore)
                console.log("loadingMore : ", loadingMore)
                console.log("userData : ", userData)
                if (entries[0].isIntersecting && hasMore && !loadingMore && userData) {
                    const nextPage = currentPage + 1;
                    setCurrentPage(nextPage);
                    fetchSpinHistory(userData.id, activeTab, nextPage, false);
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [hasMore, loadingMore, currentPage, userData, activeTab]);

    const getOrCreateUser = async (userName: string): Promise<UserType> => {
        try {
            return await fetchUser(userName);
        } catch (error: unknown) {
            if (isApiError(error) && error.status === 404) {
            return await createUser(userName);
            }
            throw error;
        }
    };

    const fetchUser = async (userName: string): Promise<UserType> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${userName}`);

            if (!res.ok) {
                const error: ApiError = new Error("Failed to fetch user");
                error.status = res.status;
                throw error;
            }

            return await res.json();
        } catch (error) {
            console.error("fetchUser error:", error);
            throw error;
        }
    };

    const createUser = async (userName: string): Promise<UserType> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_name: userName }),
            });

            if (!res.ok) {
                throw new Error("Failed to create user");
            }

            return await res.json();
        } catch (error) {
            console.error("createUser error:", error);
            throw error;
        }
    };


    const fetchCheckpoints = async (): Promise<CheckpointType[]> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkpoints`);

            if (!res.ok) {
                throw new Error("Failed to fetch checkpoints");
            }

            const data: CheckpointType[] = await res.json();

            return data.sort((a, b) => a.pointRequired - b.pointRequired);
        } catch (error) {
            console.error("fetchCheckpoints error:", error);
            throw error;
        }
    };

    const fetchUserCheckpoints = async (userId: string): Promise<UserCheckpointType[]> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/checkpoints/${userId}`);

            if (!res.ok) {
                throw new Error("Failed to fetch user checkpoints");
            }

            return await res.json();
        } catch (error) {
            console.error("fetchUserCheckpoints error:", error);
            throw error;
        }
    };

    const fetchSpinHistory = async (
        userId: string, 
        tab: TabType, 
        page: number, 
        reset: boolean = false
    ): Promise<void> => {
        try {
            if (reset) {
                setLoadingMore(true);
            } else {
                setLoadingMore(true);
            }

            let response: Response;
            if (tab === 'all') {
                response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/spin-history/${page}`);
            } else if (tab === 'my') {
                response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/spin-history/${userId}/${page}`);
            } else {
                const userCheckpoints = await fetchUserCheckpoints(userData?.id || "")
                setUserCheckpoints(userCheckpoints);
                return;
            }
            
            if (!response.ok) throw new Error('Failed to fetch spin history');
            const data: SpinHistoryResponseType = await response.json();
            
            if (reset) {
                setSpinHistory(data.spinHistories || []);
            } else {
                setSpinHistory(prev => [...prev, ...(data.spinHistories || [])]);
            }
            
            // Check if there are more records to load
            const loadedCount = reset ? (data.spinHistories?.length || 0) : spinHistory.length + (data.spinHistories?.length || 0);
            setHasMore(loadedCount < data.total);
            
            setLoadingMore(false);
        } catch (error) {
            console.error('Error fetching spin history:', error);
            setLoadingMore(false);
        }
    };

    const onClickReceiveReward = async (checkpointId: string) => {
        const req: ReceiveCheckpointRequestType= {
            user_id: userData?.id || "",
            checkpoint_id: checkpointId
        }
        const res = await callApiReceiveReward(req)
        setRewardName(res.checkpoint?.rewardName || "")
        setIsModalOpen(true)

        const userCheckpoints = await fetchUserCheckpoints(userData?.id || "")
        setUserCheckpoints(userCheckpoints);
        const checkpoints = await fetchCheckpoints();
        setCheckpoints(checkpoints);

    }

    const callApiReceiveReward = async(payload: ReceiveCheckpointRequestType): Promise<ReceiveCheckpointResponseType> => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/recieve-checkpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            setErrorTitle("เกิดข้อผิดพลาด")
            setErrorMessage("กรุณาลองใหม่ภายหลัง")
            setIsModalErrorOpen(true)
            throw new Error("Failed to receive checkpoint");
        }

        return res.json();
    }

    const getCheckpointStatus = (checkpoint: CheckpointType): CheckpointStatus => {
        if (!userData) return 'locked';
        
        const isReceived = userCheckpoints.some(uc => uc.checkpointId === checkpoint.id);
        if (isReceived) return 'received';
        
        if (userData.totalPoint >= checkpoint.pointRequired) return 'available';
        
        return 'locked';
    };

    const getProgressPercentage = (): number => {
        if (!userData || checkpoints.length === 0) return 0;

        const lastIndex = checkpoints.length - 1;

        const sumExceptLast = checkpoints
            .slice(0, lastIndex)
            .reduce((sum, c) => sum + c.pointRequired, 0);

        const lastPoint = checkpoints[lastIndex].pointRequired;

        const userPoint = userData.totalPoint;

        if (userPoint <= sumExceptLast) {
            return (userPoint / sumExceptLast) * 45;
        }

        const overLast = userPoint - sumExceptLast;
        return 45 + (overLast / lastPoint) * 55;
    };

    const onClickGotoPlay = () => {
        router.push(`/GameSpinner?userId=${userData?.id}`)
    }


    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes} น.`;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-gray-600">กำลังโหลด...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                <div className="text-red-600 mb-2">เกิดข้อผิดพลาด</div>
                <div className="text-gray-600 text-sm">{error}</div>
                </div>
            </div>
        );
    }

    return (
        <>
        
            <PageLayout 
                textButton="ไปเล่นเกม" 
                styleButton={{
                    backgroundColor: '#FFC124',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    fontFamily: 'Kanit, sans-serif',
                    borderRadius: '100px',
                    height: '48px',
                    width: '100%' 
                }}
                onClickButton={onClickGotoPlay}
            >
                <div className="flex flex-col w-full h-full items-center justify-start bg-white">
                    
                    <div className="w-full bg-[#cccccc] p-4 mb-4">
                        <div className='w-ful bg-white rounded-3xl border border-black border-solid p-4 relative'>
                            <div className="bg-[#B63335] text-white text-sm font-medium px-4 py-2 rounded-r-full inline-block mb-4 absolute left-[0px]">
                                แชร์คะแนน
                            </div>
                            
                            <h2 className="text-right text-xl font-bold mb-2 text-black">สะสมคะแนน</h2>
                            
                            <div className="text-center mb-4">
                                <div className="text-gray-700 mb-1 text-right">
                                    คะแนนครบ {checkpoints[checkpoints.length - 1]?.pointRequired?.toLocaleString()} รับของรางวัล 1 รายการ
                                </div>
                                <div className="text-4xl font-bold text-[#FF2428] text-right">
                                    {userData?.totalPoint?.toLocaleString()}/{checkpoints[checkpoints.length - 1]?.pointRequired?.toLocaleString()}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative mb-6 p-4">
                                <div className="flex justify-between h-7 text-xs text-gray-600 mb-2 relative">
                                    {checkpoints.map((checkpoint, index) => {
                                        const lastIndex = checkpoints.length - 1;
                                        const sumExceptLast = checkpoints
                                        .slice(0, lastIndex)
                                        .reduce((sum, c) => sum + c.pointRequired, 0);

                                        let position: number;

                                        if (index < lastIndex) {
                                            position = (checkpoint.pointRequired / sumExceptLast) * 45;
                                        } else {
                                            position = 100;
                                        }
                                        return (
                                            <span 
                                                className='absolute top-0' 
                                                style={{ left: `${position}%`, marginLeft: index === checkpoints.length - 1 ? '-50px' : '-30px', whiteSpace: index === checkpoints.length - 1 ? 'nowrap' : 'unset' }} 
                                                key={checkpoint.id}
                                            >
                                                ครบ {formatCurrency(checkpoint.pointRequired)}
                                            </span>
                                        )
                                    })}
                                </div>
                            
                                <div className="relative h-3 bg-gray-200 rounded-full">
                                    <div 
                                        className="absolute h-3 bg-gradient-to-r from-[#FF8158] to-[#FF8902] rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min(getProgressPercentage(), 100)}%` }}
                                    >
                                        {/* Current Marker */}
                                        <div className='w-full h-full relative'>
                                            <div className='w-[18px] h-[18px] rounded-full bg-gradient-to-b from-[#FF0004] to-[#FC8625] absolute top-[-3px] right-0'></div>
                                        </div>
                                    </div>

                                    {/* Checkpoint Markers */}
                                    {checkpoints.map((checkpoint, index) => {
                                        const status = getCheckpointStatus(checkpoint);
                                        const lastIndex = checkpoints.length - 1;
                                        const sumExceptLast = checkpoints
                                        .slice(0, lastIndex)
                                        .reduce((sum, c) => sum + c.pointRequired, 0);

                                        let position: number;

                                        if (index < lastIndex) {
                                            position = (checkpoint.pointRequired / sumExceptLast) * 45;
                                        } else {
                                            position = 100;
                                        }
                                    
                                        return (
                                            <div 
                                                key={checkpoint.id}
                                                className="absolute top-1/2 -translate-y-1/2"
                                                style={{ left: `${position}%`, marginLeft: index === checkpoints.length - 1 ? '-20px' : '-16px' }}
                                            >
                                            <div className={`${
                                                index === checkpoints.length - 1 ? 'w-[30px] h-[30px]' : 'w-[20px] h-[20px]'
                                                } rounded-full flex items-center justify-center ${
                                                    status === 'received' 
                                                    ? 'bg-[#096600]'
                                                    : status === 'available'
                                                    ? 'bg-[#a4a4a4]'
                                                    : ''
                                                }`}>
                                                    {status === 'received' || status === 'available' ? (
                                                    <   Check className="text-white" size={15}/>
                                                    ) : index === checkpoints.length - 1 ? (
                                                        <Image src={coin} width={30} height={30} alt="icon" />
                                                    ) : null}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                {checkpoints.map((checkpoint, index) => {
                                    const status = getCheckpointStatus(checkpoint);
                                    const isReceived = status === 'received';
                                    const isAvailable = status === 'available';
                                    
                                    return (
                                    <button
                                        key={checkpoint.id}
                                        disabled={!isAvailable || isReceived}
                                        onClick={() => onClickReceiveReward(checkpoint.id)}
                                        className={`flex-1 py-3 rounded-full text-sm font-medium transition-colors ${
                                        isReceived
                                            ? 'bg-[#FF7B7B] text-white cursor-not-allowed'
                                            : isAvailable
                                            ? 'bg-[#FF0004] text-white hover:bg-red-700 cursor-pointer'
                                            : 'bg-[#DDDDDD] text-white cursor-not-allowed'
                                        }`}
                                    >
                                        {isReceived 
                                        ? `รับรางวัล ${index + 1} แล้ว`
                                        : `รับรางวัล ${index + 1}`
                                        }
                                    </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="w-full px-6 mb-4">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${
                                activeTab === 'all'
                                    ? 'bg-white border-red-500 text-red-500'
                                    : 'bg-white border-gray-300 text-gray-600'
                                }`}
                            >
                                ประวัติทั่วโลก
                            </button>
                            <button
                                onClick={() => setActiveTab('my')}
                                className={`px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${
                                activeTab === 'my'
                                    ? 'bg-white border-red-500 text-red-500'
                                    : 'bg-white border-gray-300 text-gray-600'
                                }`}
                            >
                                ประวัติของฉัน
                            </button>
                            <button
                                onClick={() => setActiveTab('redeemed')}
                                className={`px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${
                                activeTab === 'redeemed'
                                    ? 'bg-white border-red-500 text-red-500'
                                    : 'bg-white border-gray-300 text-gray-600'
                                }`}
                            >
                                ประวัติรางวัลของฉัน
                            </button>
                        </div>
                    </div>

                    {/* History List */}
                    <div className="w-full max-h-[calc(100dvh-40%-100px] overflow-auto">
                        {activeTab !== 'redeemed' && spinHistory.length === 0 && !loadingMore ? (
                        <div className="text-center py-8 text-gray-500">
                            ไม่มีประวัติ
                        </div>
                        ) : (
                            <>
                                {activeTab !== 'redeemed' ? (
                                    <>
                                        {spinHistory.map((item) => (
                                            <div key={item.id} className="bg-white p-4 flex items-center gap-4 border-b border-[#eee] border-solid">
                                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex-shrink-0" />
                                                <div className="flex-1">
                                                <h3 className="font-bold text-[#333333] mb-1">
                                                    {item.user.userName}
                                                </h3>
                                                <p className="text-sm text-[#A3A3A3]">
                                                    รางวัล: {item.rewardPoint.toLocaleString()} | เล่นเมื่อ {formatDate(item.createdAt)}
                                                </p>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        {/* Infinite Scroll Trigger */}
                                        {hasMore && (
                                            <div ref={observerTarget} className="py-4 flex justify-center">
                                                <Loader2 className="w-6 h-6 animate-spin text-red-600" />
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {userCheckpoints.map((item) => (
                                            <div key={item.id} className="bg-white p-4 flex items-center gap-4 border-b border-[#eee] border-solid">
                                                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex-shrink-0" />
                                                <div className="flex-1">
                                                <h3 className="font-bold text-[#333333] mb-1">
                                                    ได้รับ{item.checkpoint?.rewardName}
                                                </h3>
                                                <p className="text-sm text-[#A3A3A3]">
                                                    ได้รับเมื่อ : {formatDate(item.receivedAt)}
                                                </p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </PageLayout>

            { isModalOpen && 
                <ModalAlert 
                    icon={<Image src={coin} width={78} height={78} alt="icon" />}
                    onClose={() => setIsModalOpen(false)}
                    title="ยินดีด้วย"
                    description={"คุณได้รับ" + rewardName}
                    width={300}
                /> 
            }

            { isModalErrorOpen && 
                <ModalAlert 
                    icon={<></>}
                    onClose={() => setIsModalErrorOpen(false)}
                    title={errorTitle}
                    description={errorMessage}
                    width={300}
                /> 
            }
        </>
    );
}