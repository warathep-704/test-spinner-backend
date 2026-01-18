(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GameSpinner() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userId = searchParams.get("userId");
    const API_BASE_URL = 'http://localhost:8080/api';
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalScore, setTotalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const spinIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const decelerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameSpinner.useEffect": ()=>{
            fetchWheelRewards();
        }
    }["GameSpinner.useEffect"], []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-2xl",
                children: "Loading wheel..."
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 145,
            columnNumber: 13
        }, this);
    }
    if (segments.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-red-600 mb-4",
                        children: "No active rewards available"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchWheelRewards,
                        className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 156,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 154,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 153,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#FF8D0B] flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-2 text-gray-800",
                    children: "Prize Spinner"
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: [
                            "Total Score: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-purple-600",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                lineNumber: 174,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 174,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-80 h-80 mx-auto mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-600 drop-shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-6 bg-red-600 -translate-y-6"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full rounded-full relative overflow-hidden shadow-xl border-8 border-gray-800",
                            style: {
                                transform: `rotate(${rotation}deg)`,
                                transitionDuration: '0ms'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: pathData,
                                                    fill: segment.color,
                                                    stroke: "white",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                    lineNumber: 229,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, segment.id, true, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-800 rounded-full shadow-lg border-4 border-white"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, this),
                result !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6 animate-bounce",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-purple-600",
                        children: [
                            "You won ",
                            result,
                            " points! 🎉"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 253,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 252,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: stopSpin,
                        disabled: !isSpinning,
                        className: "flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg",
                        children: "STOP"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 261,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startSpin,
                        disabled: isSpinning,
                        className: "flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg",
                        children: "SPIN"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 269,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 259,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 169,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
        lineNumber: 168,
        columnNumber: 9
    }, this);
}
_s(GameSpinner, "qSvA2a1S7PFZ/K4qJVDMihQAuUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = GameSpinner;
var _c;
__turbopack_context__.k.register(_c, "GameSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_sample_nextzy-spinner_frontend_56224377._.js.map