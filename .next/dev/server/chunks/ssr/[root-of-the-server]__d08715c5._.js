module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/sample/nextzy-spinner/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
function GameSpinner() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userId = searchParams.get("userId");
    const API_BASE_URL = 'http://localhost:8080/api';
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    const spinIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const decelerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchWheelRewards();
    }, []);
    const fetchWheelRewards = async ()=>{
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`${API_BASE_URL}/wheel-reward`);
            if (!response.ok) {
                throw new Error('Failed to fetch wheel rewards');
            }
            const rewards = await response.json();
            const activeRewards = rewards.filter((r)=>r.isActive);
            const segmentData = activeRewards.map((reward)=>({
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
    const saveSpinResult = async (points)=>{
        try {
            const req = {
                user_id: userId,
                point: points
            };
            const response = await fetch(`${API_BASE_URL}/spin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            });
            if (!response.ok) {
                throw new Error('Failed to save spin result');
            }
            const data = await response.json();
            setTotalScore(data.totalPoint);
        } catch (err) {
            console.error('Error saving spin result:', err);
            setError('Failed to save result. Points not recorded.');
        }
    };
    const startSpin = ()=>{
        if (isSpinning || segments.length === 0) return;
        setIsSpinning(true);
        setResult(null);
        setError('');
        const currentSpeed = 20;
        spinIntervalRef.current = setInterval(()=>{
            setRotation((prev)=>(prev + currentSpeed) % 360);
        }, 16);
    };
    const stopSpin = ()=>{
        if (!isSpinning) return;
        if (spinIntervalRef.current) {
            clearInterval(spinIntervalRef.current);
        }
        let currentSpeed = 20;
        const deceleration = 0.3;
        decelerationRef.current = setInterval(()=>{
            currentSpeed -= deceleration;
            if (currentSpeed <= 0) {
                if (decelerationRef.current) {
                    clearInterval(decelerationRef.current);
                }
                setIsSpinning(false);
                calculateResult();
            } else {
                setRotation((prev)=>(prev + currentSpeed) % 360);
            }
        }, 16);
    };
    const calculateResult = async ()=>{
        let normalizedRotation = rotation % 360;
        if (normalizedRotation < 0) normalizedRotation += 360;
        const segmentAngle = 360 / segments.length;
        const adjustedRotation = (360 - normalizedRotation + segmentAngle / 2) % 360;
        let segmentIndex = Math.floor(adjustedRotation / segmentAngle) % segments.length;
        if (segmentIndex < 0) segmentIndex += segments.length;
        if (segmentIndex >= segments.length) segmentIndex = 0;
        const won = segments[segmentIndex];
        console.log('Rotation:', normalizedRotation.toFixed(2), 'Adjusted:', adjustedRotation.toFixed(2), 'Index:', segmentIndex, 'Won:', won.points);
        setResult(won.points);
        await saveSpinResult(won.points);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-2xl",
                children: "Loading wheel..."
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 144,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 143,
            columnNumber: 13
        }, this);
    }
    if (segments.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-red-600 mb-4",
                        children: "No active rewards available"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 153,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchWheelRewards,
                        className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 154,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 152,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 151,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-2 text-gray-800",
                    children: "Prize Spinner"
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: [
                            "Total Score: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-purple-600",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                lineNumber: 172,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 176,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-80 h-80 mx-auto mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-600 drop-shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-6 bg-red-600 -translate-y-6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-full relative overflow-hidden shadow-xl border-8 border-gray-800",
                            style: {
                                transform: `rotate(${rotation}deg)`,
                                transitionDuration: '0ms'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 200 200",
                                    className: "w-full h-full",
                                    children: segments.map((segment, index)=>{
                                        const angle = 360 / segments.length * index;
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: pathData,
                                                    fill: segment.color,
                                                    stroke: "white",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: textX,
                                                    y: textY,
                                                    fontSize: "24",
                                                    fontWeight: "bold",
                                                    fill: "#1F2937",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "middle",
                                                    transform: `rotate(${textRotate} ${textX} ${textY})`,
                                                    children: segment.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, segment.id, true, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-800 rounded-full shadow-lg border-4 border-white"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, this),
                result !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6 animate-bounce",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-purple-600",
                        children: [
                            "You won ",
                            result,
                            " points! 🎉"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 251,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 250,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: stopSpin,
                        disabled: !isSpinning,
                        className: "flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg",
                        children: "STOP"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 259,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startSpin,
                        disabled: isSpinning,
                        className: "flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg",
                        children: "SPIN"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 267,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 257,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 167,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
        lineNumber: 166,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d08715c5._.js.map