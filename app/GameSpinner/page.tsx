'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import { WheelRewardType, SegmentType, SpinResponseType, UserType, CheckpointType } from "@/types/type"
import PageLayout from "@/components/layout/PageLayout";
import { useRouter } from 'next/navigation';
import arrow from "@/img/arrow.png"
import coin from "@/img/coin.png";
import Image from "next/image";
import { formatCurrency } from "@/utils/util"
import ModalAlert from "@/components/modal/ModalAlert";

export default function GameSpinner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const userId = searchParams.get("userId");

    const [rotation, setRotation] = useState<number>(0);
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [segments, setSegments] = useState<SegmentType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const [userData, setUserData] = useState<UserType | null>(null);
    const [checkpoints, setCheckpoints] = useState<CheckpointType[]>([]);

    const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const decelerationRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        fetchWheelRewards();
        
        if (typeof window !== 'undefined') {
            const userLocal = localStorage.getItem("user_spinner");
            const checkPointsLocal = localStorage.getItem("checkpoints_spinner");

            if (userLocal) {
                try {
                const userData: UserType = JSON.parse(userLocal);
                callGetUser(userData.userName)
                setUserData(userData)
               
                } catch (err) {
                    console.error('Error parsing userData:', err);
                }
            } 
            
            if (checkPointsLocal) {
                try {
                    const checkpoint: CheckpointType[] = JSON.parse(checkPointsLocal);
                    setCheckpoints(checkpoint)
                    
                } catch (err) {
                    console.error('Error parsing checkpoints:', err);
                }
            }
        }
    }, []);

    const onClickGotoPlay = () =>{
        router.push(`/Home?userName=${userData?.userName}`)
    }

    const fetchWheelRewards = async (): Promise<void> => {
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wheel-reward`);

            if (!response.ok) {
                throw new Error('Failed to fetch wheel rewards');
            }

            const rewards: WheelRewardType[] = await response.json();

            const activeRewards = rewards.filter(r => r.isActive);
            const segmentData: SegmentType[] = activeRewards.map((reward) => ({
                id: reward.id,
                points: reward.point,
                color: '#640000',
                label: reward.point.toString()
            }));

            setSegments(segmentData);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load rewards');
            setLoading(false);
        }
    };

    const fetchUser = async (userName: string): Promise<UserType> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${userName}`);

            if (!res.ok) {
                throw new Error('Failed to fethch user result');
            }
            return await res.json();
        } catch (error) {
            console.error("fetchUser error:", error);
            throw error;
        }
    };

    const callGetUser = async (userName: string) => {
        const user: UserType = await fetchUser(userName)
        setUserData(user)
    }

    const saveSpinResult = async (points: number): Promise<void> => {
        try {
            const req = {
                user_id: userId,
                point: points
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/spin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req)
            });

            if (!response.ok) {
                throw new Error('Failed to save spin result');
            }

            const data: SpinResponseType = await response.json();
            setUserData(data)

        } catch (err) {
            console.error('Error saving spin result:', err);
            setError('Failed to save result. Points not recorded.');
        }
    };

    const startSpin = (): void => {
        if (isSpinning || segments.length === 0) return;

        setIsSpinning(true);
        setError('');

        const currentSpeed = 20;

        spinIntervalRef.current = setInterval(() => {
            setRotation(prev => (prev + currentSpeed) % 360);
        }, 16);
    };

    const stopSpin = (): void => {
        if (!isSpinning) return;

        if (spinIntervalRef.current) {
            clearInterval(spinIntervalRef.current);
        }

        let currentSpeed = 20;
        const deceleration = 0.3;

        decelerationRef.current = setInterval(() => {
            currentSpeed -= deceleration;

            if (currentSpeed <= 0) {
                if (decelerationRef.current) {
                    clearInterval(decelerationRef.current);
                }
                setIsSpinning(false);
                calculateResult();
            } else {
                setRotation(prev => (prev + currentSpeed) % 360);
            }
        }, 16);
    };

    const calculateResult = async (): Promise<void> => {
        let normalizedRotation = rotation % 360;
        if (normalizedRotation < 0) normalizedRotation += 360;

        const segmentAngle = 360 / segments.length;
        const adjustedRotation = (360 - normalizedRotation + segmentAngle / 2) % 360;
        let segmentIndex = Math.floor(adjustedRotation / segmentAngle) % segments.length;

        if (segmentIndex < 0) segmentIndex += segments.length;
        if (segmentIndex >= segments.length) segmentIndex = 0;

        const won = segments[segmentIndex];
        setResult(won.points)
        setIsModalOpen(true)

        await saveSpinResult(won.points);
    };

    if (loading) {
        return (
            <PageLayout 
                textButton="กลับหน้าหลัก" 
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
                <div className="text-white text-2xl">Loading wheel...</div>
            </PageLayout>
        );
    }

    if (segments.length === 0) {
        return (
            <PageLayout 
                textButton="กลับหน้าหลัก" 
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
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
                    <p className="text-xl text-red-600 mb-4">No active rewards available</p>
                    <button
                        onClick={fetchWheelRewards}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
                    >
                        Retry
                    </button>
                </div>

            </PageLayout>
        );
    }

    return (
        <>
            <PageLayout 
                textButton="กลับหน้าหลัก" 
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

                <div className="flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFC685] p-8 w-full h-screen">
                    <h1 className="text-[24px] font-semi-bold text-center mb-35 text-[#212B36]">
                        คะแนนสะสม {userData?.totalPoint}/{checkpoints.length > 0 ? checkpoints[checkpoints.length - 1].pointRequired : 0}
                    </h1>
                    <div className='w-full '>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}

                        <div className="relative w-80 h-80 mx-auto mb-8">
                            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 -translate-y-4 z-10">
                                <Image src={arrow} width={63} height={63} alt="icon" />
                            </div>

                            {/* Spinner */}
                            <div
                                className="w-full h-full rounded-full relative overflow-hidden mt-5"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transitionDuration: '0ms'
                                }}
                            >
                                {/* Using SVG for precise equal segments */}
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {segments.map((segment, index) => {
                                        const angle = (360 / segments.length) * index;
                                        const segmentAngle = 360 / segments.length;

                                        const startAngle = (angle - 90) * Math.PI / 180;
                                        const endAngle = (angle + segmentAngle - 90) * Math.PI / 180;

                                        const x1 = 100 + 100 * Math.cos(startAngle);
                                        const y1 = 100 + 100 * Math.sin(startAngle);
                                        const x2 = 100 + 100 * Math.cos(endAngle);
                                        const y2 = 100 + 100 * Math.sin(endAngle);

                                        const largeArc = segmentAngle > 180 ? 1 : 0;

                                        const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`;

                                        const textAngle = (angle + segmentAngle / 2 - 90) * Math.PI / 180;
                                        const textX = 100 + 60 * Math.cos(textAngle);
                                        const textY = 100 + 60 * Math.sin(textAngle);
                                        const textRotate = angle + segmentAngle / 2;

                                        return (
                                            <g key={segment.id}>
                                                <path
                                                    d={pathData}
                                                    fill={segment.color}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                />
                                                <text
                                                    x={textX}
                                                    y={textY}
                                                    fontSize="24"
                                                    fontWeight="bold"
                                                    fill="#FFF"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    transform={`rotate(${textRotate} ${textX} ${textY})`}
                                                >
                                                    {formatCurrency(parseInt(segment.label))}
                                                </text>
                                            </g>
                                        );
                                    })}
                                </svg>

                                {/* Center circle */}
                                <Image 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                                    src={coin} 
                                    width={55} 
                                    height={55}
                                    alt="icon" 
                                />

                            </div>
                        </div>

                        <div className="flex justify-center">
                            {isSpinning ? (
                                <button
                                    onClick={stopSpin}
                                    disabled={!isSpinning}
                                    className="w-[120px] bg-[#FF2428] text-white font-bold py-2 px-6 rounded-[12.5px] text-[20px] transition-colors"
                                >
                                    หยุด
                                </button>
                            ) : (
                                <button
                                    onClick={startSpin}
                                    disabled={isSpinning}
                                    className="w-[120px] bg-[#FF2428] text-white font-bold py-2 px-6 rounded-[12.5px] text-[20px] transition-color"
                                >
                                    เริ่มหมุน
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </PageLayout>

            { isModalOpen && 
                <ModalAlert 
                    icon={<></>}
                    onClose={() => setIsModalOpen(false)}
                    title="ได้รับ"
                    description={result + " คะแนน"}
                    width={300}
                /> 
            }
        </>
    );
}