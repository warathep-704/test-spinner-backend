module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/layout/PageLayout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/img/arrow.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/img/coin.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/sample/nextzy-spinner/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utils/util'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/modal/ModalAlert'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
;
function GameSpinner() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userId = searchParams.get("userId");
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checkpoints, setCheckpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const spinIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const decelerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchWheelRewards();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const onClickGotoPlay = ()=>{
        router.push(`/Home?userName=${userData?.userName}`);
    };
    const fetchWheelRewards = async ()=>{
        try {
            setLoading(true);
            setError('');
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/wheel-reward`);
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
    const fetchUser = async (userName)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/user/${userName}`);
            if (!res.ok) {
                throw new Error('Failed to fethch user result');
            }
            return await res.json();
        } catch (error) {
            console.error("fetchUser error:", error);
            throw error;
        }
    };
    const callGetUser = async (userName)=>{
        const user = await fetchUser(userName);
        setUserData(user);
    };
    const saveSpinResult = async (points)=>{
        try {
            const req = {
                user_id: userId,
                point: points
            };
            const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8080/api")}/spin`, {
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
            setUserData(data);
        } catch (err) {
            console.error('Error saving spin result:', err);
            setError('Failed to save result. Points not recorded.');
        }
    };
    const startSpin = ()=>{
        if (isSpinning || segments.length === 0) return;
        setIsSpinning(true);
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
        setResult(won.points);
        setIsModalOpen(true);
        await saveSpinResult(won.points);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLayout, {
            textButton: "กลับหน้าหลัก",
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-2xl",
                children: "Loading wheel..."
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 213,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 199,
            columnNumber: 13
        }, this);
    }
    if (segments.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLayout, {
            textButton: "กลับหน้าหลัก",
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-red-600 mb-4",
                        children: "No active rewards available"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 235,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchWheelRewards,
                        className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                        lineNumber: 236,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 234,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
            lineNumber: 220,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLayout, {
                textButton: "กลับหน้าหลัก",
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFC685] p-8 w-full h-screen",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[24px] font-semi-bold text-center mb-35 text-[#212B36]",
                            children: [
                                "คะแนนสะสม ",
                                userData?.totalPoint,
                                "/",
                                checkpoints.length > 0 ? checkpoints[checkpoints.length - 1].pointRequired : 0
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 266,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full ",
                            children: [
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-80 h-80 mx-auto mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[-20px] left-1/2 -translate-x-1/2 -translate-y-4 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: arrow,
                                                width: 63,
                                                height: 63,
                                                alt: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-full relative overflow-hidden mt-5",
                                            style: {
                                                transform: `rotate(${rotation}deg)`,
                                                transitionDuration: '0ms'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: pathData,
                                                                    fill: segment.color,
                                                                    stroke: "white",
                                                                    strokeWidth: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: textX,
                                                                    y: textY,
                                                                    fontSize: "24",
                                                                    fontWeight: "bold",
                                                                    fill: "#FFF",
                                                                    textAnchor: "middle",
                                                                    dominantBaseline: "middle",
                                                                    transform: `rotate(${textRotate} ${textX} ${textY})`,
                                                                    children: formatCurrency(parseInt(segment.label))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, segment.id, true, {
                                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 45
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                                    src: coin,
                                                    width: 55,
                                                    height: 55,
                                                    alt: "icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: stopSpin,
                                        disabled: !isSpinning,
                                        className: "w-[120px] bg-[#FF2428] text-white font-bold py-2 px-6 rounded-[12.5px] text-[20px] transition-colors",
                                        children: "หยุด"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startSpin,
                                        disabled: isSpinning,
                                        className: "w-[120px] bg-[#FF2428] text-white font-bold py-2 px-6 rounded-[12.5px] text-[20px] transition-color",
                                        children: "เริ่มหมุน"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                            lineNumber: 269,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                    lineNumber: 265,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalAlert, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$sample$2f$nextzy$2d$spinner$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                onClose: ()=>setIsModalOpen(false),
                title: "ได้รับ",
                description: result + " คะแนน",
                width: 300
            }, void 0, false, {
                fileName: "[project]/Documents/sample/nextzy-spinner/frontend/app/GameSpinner/page.tsx",
                lineNumber: 374,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__93427572._.js.map