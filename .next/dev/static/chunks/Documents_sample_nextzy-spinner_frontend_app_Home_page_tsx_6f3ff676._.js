(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
(()=>{
    const e = new Error("Cannot find module '@/components/layout/PageLayout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/modal/ModalAlert'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/img/coin.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/utils/util'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userName = searchParams.get("userName");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalErrorOpen, setIsModalErrorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rewardName, setRewardName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorTitle, setErrorTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checkpoints, setCheckpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userCheckpoints, setUserCheckpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [spinHistory, setSpinHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isApiError = (error)=>{
        return typeof error === "object" && error !== null && "status" in error;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchData = {
                "Home.useEffect.fetchData": async ()=>{
                    if (userName && userName !== "") {
                        try {
                            setLoading(true);
                            setError(null);
                            const user = await getOrCreateUser(userName);
                            localStorage.setItem("user_spinner", JSON.stringify(user));
                            setUserData(user);
                            const checkpoints = await fetchCheckpoints();
                            setCheckpoints(checkpoints);
                            localStorage.setItem("checkpoints_spinner", JSON.stringify(checkpoints));
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
                }
            }["Home.useEffect.fetchData"];
            fetchData();
        }
    }["Home.useEffect"], [
        userName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (userData && !loading) {
                setSpinHistory([]);
                setCurrentPage(1);
                setHasMore(true);
                fetchSpinHistory(userData.id, activeTab, 1, true);
            }
        }
    }["Home.useEffect"], [
        activeTab
    ]);
    // Infinite scroll observer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    console.log("entries : ", entries);
                    console.log("hasMore : ", hasMore);
                    console.log("loadingMore : ", loadingMore);
                    console.log("userData : ", userData);
                    if (entries[0].isIntersecting && hasMore && !loadingMore && userData) {
                        const nextPage = currentPage + 1;
                        setCurrentPage(nextPage);
                        fetchSpinHistory(userData.id, activeTab, nextPage, false);
                    }
                }
            }["Home.useEffect"], {
                threshold: 0.1
            });
            const currentTarget = observerTarget.current;
            if (currentTarget) {
                observer.observe(currentTarget);
            }
            return ({
                "Home.useEffect": ()=>{
                    if (currentTarget) {
                        observer.unobserve(currentTarget);
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        hasMore,
        loadingMore,
        currentPage,
        userData,
        activeTab
    ]);
    const getOrCreateUser = async (userName)=>{
        try {
            return await fetchUser(userName);
        } catch (error) {
            if (isApiError(error) && error.status === 404) {
                return await createUser(userName);
            }
            throw error;
        }
    };
    const fetchUser = async (userName)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/user/${userName}`);
            if (!res.ok) {
                const error = new Error("Failed to fetch user");
                error.status = res.status;
                throw error;
            }
            return await res.json();
        } catch (error) {
            console.error("fetchUser error:", error);
            throw error;
        }
    };
    const createUser = async (userName)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_name: userName
                })
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
    const fetchCheckpoints = async ()=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/checkpoints`);
            if (!res.ok) {
                throw new Error("Failed to fetch checkpoints");
            }
            const data = await res.json();
            return data.sort((a, b)=>a.pointRequired - b.pointRequired);
        } catch (error) {
            console.error("fetchCheckpoints error:", error);
            throw error;
        }
    };
    const fetchUserCheckpoints = async (userId)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/user/checkpoints/${userId}`);
            if (!res.ok) {
                throw new Error("Failed to fetch user checkpoints");
            }
            return await res.json();
        } catch (error) {
            console.error("fetchUserCheckpoints error:", error);
            throw error;
        }
    };
    const fetchSpinHistory = async (userId, tab, page, reset = false)=>{
        try {
            if (reset) {
                setLoadingMore(true);
            } else {
                setLoadingMore(true);
            }
            let response;
            if (tab === 'all') {
                response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/spin-history/${page}`);
            } else if (tab === 'my') {
                response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/user/spin-history/${userId}/${page}`);
            } else {
                const userCheckpoints = await fetchUserCheckpoints(userData?.id || "");
                setUserCheckpoints(userCheckpoints);
                return;
            }
            if (!response.ok) throw new Error('Failed to fetch spin history');
            const data = await response.json();
            if (reset) {
                setSpinHistory(data.spinHistories || []);
            } else {
                setSpinHistory((prev)=>[
                        ...prev,
                        ...data.spinHistories || []
                    ]);
            }
            // Check if there are more records to load
            const loadedCount = reset ? data.spinHistories?.length || 0 : spinHistory.length + (data.spinHistories?.length || 0);
            setHasMore(loadedCount < data.total);
            setLoadingMore(false);
        } catch (error) {
            console.error('Error fetching spin history:', error);
            setLoadingMore(false);
        }
    };
    const onClickReceiveReward = async (checkpointId)=>{
        const req = {
            user_id: userData?.id || "",
            checkpoint_id: checkpointId
        };
        const res = await callApiReceiveReward(req);
        setRewardName(res.checkpoint?.rewardName || "");
        setIsModalOpen(true);
        const userCheckpoints = await fetchUserCheckpoints(userData?.id || "");
        setUserCheckpoints(userCheckpoints);
        const checkpoints = await fetchCheckpoints();
        setCheckpoints(checkpoints);
    };
    const callApiReceiveReward = async (payload)=>{
        const res = await fetch(("TURBOPACK compile-time value", "http://localhost:8080/api") + "/recieve-checkpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            setErrorTitle("เกิดข้อผิดพลาด");
            setErrorMessage("กรุณาลองใหม่ภายหลัง");
            setIsModalErrorOpen(true);
            throw new Error("Failed to receive checkpoint");
        }
        return res.json();
    };
    const getCheckpointStatus = (checkpoint)=>{
        if (!userData) return 'locked';
        const isReceived = userCheckpoints.some((uc)=>uc.checkpointId === checkpoint.id);
        if (isReceived) return 'received';
        if (userData.totalPoint >= checkpoint.pointRequired) return 'available';
        return 'locked';
    };
    const getProgressPercentage = ()=>{
        if (!userData || checkpoints.length === 0) return 0;
        const lastIndex = checkpoints.length - 1;
        const sumExceptLast = checkpoints.slice(0, lastIndex).reduce((sum, c)=>sum + c.pointRequired, 0);
        const lastPoint = checkpoints[lastIndex].pointRequired;
        const userPoint = userData.totalPoint;
        if (userPoint <= sumExceptLast) {
            return userPoint / sumExceptLast * 45;
        }
        const overLast = userPoint - sumExceptLast;
        return 45 + overLast / lastPoint * 55;
    };
    const onClickGotoPlay = ()=>{
        router.push(`/GameSpinner?userId=${userData?.id}`);
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes} น.`;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "กำลังโหลด..."
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                lineNumber: 335,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
            lineNumber: 334,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 mb-2",
                        children: "เกิดข้อผิดพลาด"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                        lineNumber: 344,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                lineNumber: 343,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
            lineNumber: 342,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLayout, {
                textButton: "ไปเล่นเกม",
                styleButton: {
                    backgroundColor: '#FFC124',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    fontFamily: 'Kanit, sans-serif',
                    borderRadius: '100px',
                    height: '48px',
                    width: '100%'
                },
                onClickButton: onClickGotoPlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-full h-full items-center justify-start bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-[#cccccc] p-4 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-ful bg-white rounded-3xl border border-black border-solid p-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#B63335] text-white text-sm font-medium px-4 py-2 rounded-r-full inline-block mb-4 absolute left-[0px]",
                                        children: "แชร์คะแนน"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-right text-xl font-bold mb-2 text-black",
                                        children: "สะสมคะแนน"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-700 mb-1 text-right",
                                                children: [
                                                    "คะแนนครบ ",
                                                    checkpoints[checkpoints.length - 1]?.pointRequired?.toLocaleString(),
                                                    " รับของรางวัล 1 รายการ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold text-[#FF2428] text-right",
                                                children: [
                                                    userData?.totalPoint?.toLocaleString(),
                                                    "/",
                                                    checkpoints[checkpoints.length - 1]?.pointRequired?.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-6 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between h-7 text-xs text-gray-600 mb-2 relative",
                                                children: checkpoints.map((checkpoint, index)=>{
                                                    const lastIndex = checkpoints.length - 1;
                                                    const sumExceptLast = checkpoints.slice(0, lastIndex).reduce((sum, c)=>sum + c.pointRequired, 0);
                                                    let position;
                                                    if (index < lastIndex) {
                                                        position = checkpoint.pointRequired / sumExceptLast * 45;
                                                    } else {
                                                        position = 100;
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-0",
                                                        style: {
                                                            left: `${position}%`,
                                                            marginLeft: index === checkpoints.length - 1 ? '-50px' : '-30px',
                                                            whiteSpace: index === checkpoints.length - 1 ? 'nowrap' : 'unset'
                                                        },
                                                        children: [
                                                            "ครบ ",
                                                            formatCurrency(checkpoint.pointRequired)
                                                        ]
                                                    }, checkpoint.id, true, {
                                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-3 bg-gray-200 rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute h-3 bg-gradient-to-r from-[#FF8158] to-[#FF8902] rounded-full transition-all duration-500",
                                                        style: {
                                                            width: `${Math.min(getProgressPercentage(), 100)}%`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[18px] h-[18px] rounded-full bg-gradient-to-b from-[#FF0004] to-[#FC8625] absolute top-[-3px] right-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 37
                                                    }, this),
                                                    checkpoints.map((checkpoint, index)=>{
                                                        const status = getCheckpointStatus(checkpoint);
                                                        const lastIndex = checkpoints.length - 1;
                                                        const sumExceptLast = checkpoints.slice(0, lastIndex).reduce((sum, c)=>sum + c.pointRequired, 0);
                                                        let position;
                                                        if (index < lastIndex) {
                                                            position = checkpoint.pointRequired / sumExceptLast * 45;
                                                        } else {
                                                            position = 100;
                                                        }
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 -translate-y-1/2",
                                                            style: {
                                                                left: `${position}%`,
                                                                marginLeft: index === checkpoints.length - 1 ? '-20px' : '-16px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${index === checkpoints.length - 1 ? 'w-[30px] h-[30px]' : 'w-[20px] h-[20px]'} rounded-full flex items-center justify-center ${status === 'received' ? 'bg-[#096600]' : status === 'available' ? 'bg-[#a4a4a4]' : ''}`,
                                                                children: status === 'received' || status === 'available' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "text-white",
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 53
                                                                }, this) : index === checkpoints.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: coin,
                                                                    width: 30,
                                                                    height: 30,
                                                                    alt: "icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 57
                                                                }, this) : null
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, checkpoint.id, false, {
                                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: checkpoints.map((checkpoint, index)=>{
                                            const status = getCheckpointStatus(checkpoint);
                                            const isReceived = status === 'received';
                                            const isAvailable = status === 'available';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !isAvailable || isReceived,
                                                onClick: ()=>onClickReceiveReward(checkpoint.id),
                                                className: `flex-1 py-3 rounded-full text-sm font-medium transition-colors ${isReceived ? 'bg-[#FF7B7B] text-white cursor-not-allowed' : isAvailable ? 'bg-[#FF0004] text-white hover:bg-red-700 cursor-pointer' : 'bg-[#DDDDDD] text-white cursor-not-allowed'}`,
                                                children: isReceived ? `รับรางวัล ${index + 1} แล้ว` : `รับรางวัล ${index + 1}`
                                            }, checkpoint.id, false, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                lineNumber: 371,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                            lineNumber: 370,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full px-6 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('all'),
                                        className: `px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${activeTab === 'all' ? 'bg-white border-red-500 text-red-500' : 'bg-white border-gray-300 text-gray-600'}`,
                                        children: "ประวัติทั่วโลก"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('my'),
                                        className: `px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${activeTab === 'my' ? 'bg-white border-red-500 text-red-500' : 'bg-white border-gray-300 text-gray-600'}`,
                                        children: "ประวัติของฉัน"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('redeemed'),
                                        className: `px-2 py-2 rounded-full text-sm font-[13px] border-2 transition-colors ${activeTab === 'redeemed' ? 'bg-white border-red-500 text-red-500' : 'bg-white border-gray-300 text-gray-600'}`,
                                        children: "ประวัติรางวัลของฉัน"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                lineNumber: 502,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                            lineNumber: 501,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-h-[calc(100dvh-40%-100px] overflow-auto",
                            children: activeTab !== 'redeemed' && spinHistory.length === 0 && !loadingMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8 text-gray-500",
                                children: "ไม่มีประวัติ"
                            }, void 0, false, {
                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                lineNumber: 539,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: activeTab !== 'redeemed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        spinHistory.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-4 flex items-center gap-4 border-b border-[#eee] border-solid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-[#333333] mb-1",
                                                                children: item.user.userName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-[#A3A3A3]",
                                                                children: [
                                                                    "รางวัล: ",
                                                                    item.rewardPoint.toLocaleString(),
                                                                    " | เล่นเมื่อ ",
                                                                    formatDate(item.createdAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 547,
                                                columnNumber: 45
                                            }, this)),
                                        hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: observerTarget,
                                            className: "py-4 flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-6 h-6 animate-spin text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 49
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: userCheckpoints.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 flex items-center gap-4 border-b border-[#eee] border-solid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-[#333333] mb-1",
                                                            children: [
                                                                "ได้รับ",
                                                                item.checkpoint?.rewardName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-[#A3A3A3]",
                                                            children: [
                                                                "ได้รับเมื่อ : ",
                                                                formatDate(item.receivedAt)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 45
                                        }, this))
                                }, void 0, false)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                            lineNumber: 537,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                    lineNumber: 368,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                lineNumber: 354,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalAlert, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: coin,
                    width: 78,
                    height: 78,
                    alt: "icon"
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                    lineNumber: 592,
                    columnNumber: 27
                }, void 0),
                onClose: ()=>setIsModalOpen(false),
                title: "ยินดีด้วย",
                description: "คุณได้รับ" + rewardName,
                width: 300
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                lineNumber: 591,
                columnNumber: 17
            }, this),
            isModalErrorOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalAlert, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                onClose: ()=>setIsModalErrorOpen(false),
                title: errorTitle,
                description: errorMessage,
                width: 300
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/Home/page.tsx",
                lineNumber: 601,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "MRBH3MAREQLJ4GubtDhcpsVFsKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_sample_nextzy-spinner_frontend_app_Home_page_tsx_6f3ff676._.js.map