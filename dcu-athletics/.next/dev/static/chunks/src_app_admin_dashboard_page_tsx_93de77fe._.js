(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
async function fetchPosts() {
    const res = await fetch(`${API_BASE}/api/posts/`, {
        credentials: "include",
        headers: {
            "Accept": "application/json"
        }
    });
    if (!res.ok) throw new Error("Failed to load posts (are you logged in?)");
    return res.json();
}
async function pingAuth() {
    const res = await fetch(`${API_BASE}/api/auth/ping/`, {
        credentials: "include"
    });
    return res.ok;
}
function AdminDashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858";
    }
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AdminDashboard[useEffect()]": ()=>{
                let mounted = true;
                (async ()=>{
                    const ok = await pingAuth();
                    if (!mounted) {
                        return;
                    }
                    setAuthed(ok);
                    if (ok) {
                        fetchPosts().then(setPosts).catch({
                            "AdminDashboard[useEffect() > <anonymous> > (anonymous)()]": (e)=>setError(e.message)
                        }["AdminDashboard[useEffect() > <anonymous> > (anonymous)()]"]);
                    }
                })();
                return ()=>{
                    mounted = false;
                };
            }
        })["AdminDashboard[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function showToast(type, message) {
            setToast({
                type,
                message
            });
            setTimeout({
                "AdminDashboard[showToast > setTimeout()]": ()=>setToast(null)
            }["AdminDashboard[showToast > setTimeout()]"], 2500);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const showToast = t2;
    let create;
    let remove;
    let t3;
    let t4;
    let togglePublish;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        togglePublish = async function togglePublish(post) {
            const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCsrfToken1()
                },
                body: JSON.stringify({
                    is_published: !post.is_published
                })
            });
            if (!res.ok) {
                showToast("error", "Failed to update status");
                return;
            }
            const updated = await res.json();
            setPosts({
                "AdminDashboard[togglePublish > setPosts()]": (prev)=>prev ? prev.map({
                        "AdminDashboard[togglePublish > setPosts() > prev.map()]": (p)=>p.id === post.id ? updated : p
                    }["AdminDashboard[togglePublish > setPosts() > prev.map()]"]) : prev
            }["AdminDashboard[togglePublish > setPosts()]"]);
            showToast("success", updated.is_published ? "Published" : "Moved to draft");
        };
        remove = async function remove(post_0) {
            if (!confirm(`Delete '${post_0.title}'?`)) {
                return;
            }
            const res_0 = await fetch(`${API_BASE}/api/posts/${post_0.id}/`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "X-CSRFToken": getCsrfToken1()
                }
            });
            if (res_0.status !== 204) {
                showToast("error", "Failed to delete");
                return;
            }
            setPosts({
                "AdminDashboard[remove > setPosts()]": (prev_0)=>prev_0 ? prev_0.filter({
                        "AdminDashboard[remove > setPosts() > prev_0.filter()]": (p_0)=>p_0.id !== post_0.id
                    }["AdminDashboard[remove > setPosts() > prev_0.filter()]"]) : prev_0
            }["AdminDashboard[remove > setPosts()]"]);
            showToast("success", "Deleted");
        };
        create = async function create(form) {
            const fd = new FormData(form);
            const t = (fd.get("title") || "").toString().trim();
            const c = (fd.get("content") || "").toString().trim();
            if (t.length < 3) {
                showToast("error", "Title is too short");
                return;
            }
            if (c.length < 10) {
                showToast("error", "Content is too short");
                return;
            }
            const res_1 = await fetch(`${API_BASE}/api/posts/`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "X-CSRFToken": getCsrfToken1()
                },
                body: fd
            });
            if (!res_1.ok) {
                showToast("error", "Failed to create");
                return;
            }
            const created = await res_1.json();
            setPosts({
                "AdminDashboard[create > setPosts()]": (prev_1)=>prev_1 ? [
                        created,
                        ...prev_1
                    ] : [
                        created
                    ]
            }["AdminDashboard[create > setPosts()]"]);
            setCreating(false);
            form.reset();
            showToast("success", "Post created");
        };
        function getCsrfToken1() {
            const match = document.cookie.match(/csrftoken=([^;]+)/);
            return match ? match[1] : "";
        }
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-blue-700 mb-4",
            children: "Admin Dashboard"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-6",
            children: "You must be logged in at the Django admin in this browser to manage posts. Cookies are reused."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 181,
            columnNumber: 10
        }, this);
        $[4] = create;
        $[5] = remove;
        $[6] = t3;
        $[7] = t4;
        $[8] = togglePublish;
    } else {
        create = $[4];
        remove = $[5];
        t3 = $[6];
        t4 = $[7];
        togglePublish = $[8];
    }
    let t5;
    if ($[9] !== toast) {
        t5 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "status",
            className: `fixed top-4 right-4 rounded px-4 py-2 shadow text-white ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`,
            children: toast.message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 196,
            columnNumber: 19
        }, this);
        $[9] = toast;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== authed) {
        t6 = authed === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded border border-yellow-200 bg-yellow-50 p-4 text-yellow-900 mb-6",
            children: [
                "Not authenticated. Please ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "underline",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_ADMIN || "http://localhost:8000/admin/",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "log in to Django admin"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 204,
                    columnNumber: 144
                }, this),
                " and refresh this page."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 204,
            columnNumber: 30
        }, this);
        $[11] = authed;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "AdminDashboard[<button>.onClick]": ()=>setCreating(_AdminDashboardButtonOnClickSetCreating)
        })["AdminDashboard[<button>.onClick]"];
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = creating ? "Close" : "New Post";
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t7,
                className: "rounded bg-blue-700 text-white px-4 py-2 hover:bg-blue-800",
                children: t8
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 222,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== creating) {
        t10 = creating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: {
                "AdminDashboard[<form>.onSubmit]": (e_0)=>{
                    e_0.preventDefault();
                    create(e_0.currentTarget);
                }
            }["AdminDashboard[<form>.onSubmit]"],
            className: "bg-white rounded-xl shadow p-5 mb-6 grid gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "title",
                    required: true,
                    placeholder: "Title",
                    className: "border rounded px-3 py-2"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 235,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "content",
                    required: true,
                    placeholder: "Content",
                    className: "border rounded px-3 py-2 min-h-[120px]"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 235,
                    columnNumber: 197
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm mb-1",
                            children: "Image"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 235,
                            columnNumber: 318
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            name: "image",
                            accept: "image/*",
                            className: "block"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 235,
                            columnNumber: 369
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 235,
                    columnNumber: 313
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            name: "is_published",
                            defaultChecked: true,
                            className: "h-4 w-4",
                            id: "pub"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 235,
                            columnNumber: 485
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "pub",
                            children: "Published"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 235,
                            columnNumber: 581
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 235,
                    columnNumber: 444
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "rounded bg-green-600 text-white px-4 py-2 hover:bg-green-700",
                    children: "Create"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 235,
                    columnNumber: 625
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 230,
            columnNumber: 23
        }, this);
        $[16] = creating;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== error) {
        t11 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-700",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 243,
            columnNumber: 20
        }, this);
        $[18] = error;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== posts) {
        t12 = posts === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 251,
            columnNumber: 29
        }, this);
        $[20] = posts;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== posts) {
        t13 = posts && posts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-600",
            children: "No posts yet."
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 259,
            columnNumber: 42
        }, this);
        $[22] = posts;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== posts) {
        t14 = posts?.map({
            "AdminDashboard[(anonymous)()]": (p_1)=>{
                const imageUrl = p_1.image ? p_1.image.startsWith("http") ? p_1.image : `${API_BASE}${p_1.image}` : null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "bg-white rounded-xl shadow p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineEditableTitle, {
                            post: p_1,
                            onSaved: {
                                "AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved]": (updated_0)=>setPosts({
                                        "AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved > setPosts()]": (prev_2)=>prev_2 ? prev_2.map({
                                                "AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved > setPosts() > prev_2.map()]": (x)=>x.id === updated_0.id ? updated_0 : x
                                            }["AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved > setPosts() > prev_2.map()]"]) : prev_2
                                    }["AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved > setPosts()]"])
                            }["AdminDashboard[(anonymous)() > <InlineEditableTitle>.onSaved]"],
                            onError: {
                                "AdminDashboard[(anonymous)() > <InlineEditableTitle>.onError]": (m)=>showToast("error", m)
                            }["AdminDashboard[(anonymous)() > <InlineEditableTitle>.onError]"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 270,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "AdminDashboard[(anonymous)() > <button>.onClick]": ()=>togglePublish(p_1)
                                    }["AdminDashboard[(anonymous)() > <button>.onClick]"],
                                    className: `rounded px-3 py-1 text-sm ${p_1.is_published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
                                    children: p_1.is_published ? "Published" : "Draft"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "AdminDashboard[(anonymous)() > <button>.onClick]": ()=>remove(p_1)
                                    }["AdminDashboard[(anonymous)() > <button>.onClick]"],
                                    className: "rounded px-3 py-1 text-sm bg-red-100 text-red-700",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 245
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 278,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm",
                            children: new Date(p_1.created_at).toLocaleString()
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 282,
                            columnNumber: 151
                        }, this),
                        imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageUrl,
                            alt: "",
                            className: "rounded mt-3 max-h-60 object-cover w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 282,
                            columnNumber: 248
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineEditableContent, {
                            post: p_1,
                            onSaved: {
                                "AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved]": (updated_1)=>setPosts({
                                        "AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved > setPosts()]": (prev_3)=>prev_3 ? prev_3.map({
                                                "AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved > setPosts() > prev_3.map()]": (x_0)=>x_0.id === updated_1.id ? updated_1 : x_0
                                            }["AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved > setPosts() > prev_3.map()]"]) : prev_3
                                    }["AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved > setPosts()]"])
                            }["AdminDashboard[(anonymous)() > <InlineEditableContent>.onSaved]"],
                            onError: {
                                "AdminDashboard[(anonymous)() > <InlineEditableContent>.onError]": (m_0)=>showToast("error", m_0)
                            }["AdminDashboard[(anonymous)() > <InlineEditableContent>.onError]"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 282,
                            columnNumber: 332
                        }, this)
                    ]
                }, p_1.id, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 270,
                    columnNumber: 16
                }, this);
            }
        }["AdminDashboard[(anonymous)()]"]);
        $[24] = posts;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t10 || $[29] !== t11 || $[30] !== t12 || $[31] !== t13 || $[32] !== t15 || $[33] !== t5 || $[34] !== t6 || $[35] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t4,
                t5,
                t6,
                t9,
                t10,
                t11,
                t12,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[28] = t10;
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
        $[32] = t15;
        $[33] = t5;
        $[34] = t6;
        $[35] = t9;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    return t16;
}
_s(AdminDashboard, "GEDyKXrKJYHw3vMW8r7SxexxV68=");
_c = AdminDashboard;
function _AdminDashboardButtonOnClickSetCreating(v) {
    return !v;
}
function InlineEditableTitle(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858";
    }
    const { post, onSaved, onError } = t0;
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(post.title);
    let t1;
    if ($[1] !== onError || $[2] !== onSaved || $[3] !== post.id || $[4] !== value) {
        t1 = async function save() {
            const title = value.trim();
            if (title.length < 3) {
                onError("Title is too short");
                return;
            }
            const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCsrfToken()
                },
                body: JSON.stringify({
                    title
                })
            });
            if (!res.ok) {
                onError("Failed to save title");
                return;
            }
            const updated = await res.json();
            onSaved(updated);
            setEditing(false);
        };
        $[1] = onError;
        $[2] = onSaved;
        $[3] = post.id;
        $[4] = value;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const save = t1;
    let t2;
    if ($[6] !== editing || $[7] !== post.title || $[8] !== save || $[9] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3 mb-1",
            children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "border rounded px-2 py-1 w-full",
                        value: value,
                        onChange: {
                            "InlineEditableTitle[<input>.onChange]": (e)=>setValue(e.target.value)
                        }["InlineEditableTitle[<input>.onChange]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 380,
                        columnNumber: 131
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: save,
                        className: "rounded bg-blue-600 text-white px-3 py-1",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 382,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "InlineEditableTitle[<button>.onClick]": ()=>{
                                setEditing(false);
                                setValue(post.title);
                            }
                        }["InlineEditableTitle[<button>.onClick]"],
                        className: "rounded bg-gray-200 px-3 py-1",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 382,
                        columnNumber: 144
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 380,
                columnNumber: 83
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold cursor-pointer",
                onClick: {
                    "InlineEditableTitle[<h2>.onClick]": ()=>setEditing(true)
                }["InlineEditableTitle[<h2>.onClick]"],
                title: "Click to edit title",
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 387,
                columnNumber: 119
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 380,
            columnNumber: 10
        }, this);
        $[6] = editing;
        $[7] = post.title;
        $[8] = save;
        $[9] = value;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_s1(InlineEditableTitle, "5kXhup50K5K4GgVNYAmobcw9Gjs=");
_c1 = InlineEditableTitle;
function InlineEditableContent(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4734a7c673db538f8a6cc24710fdd00cee4422d81f4f23e81039940e9b5df858";
    }
    const { post, onSaved, onError } = t0;
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(post.content);
    let t1;
    if ($[1] !== onError || $[2] !== onSaved || $[3] !== post.id || $[4] !== value) {
        t1 = async function save() {
            const content = value.trim();
            if (content.length < 10) {
                onError("Content is too short");
                return;
            }
            const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCsrfToken()
                },
                body: JSON.stringify({
                    content
                })
            });
            if (!res.ok) {
                onError("Failed to save content");
                return;
            }
            const updated = await res.json();
            onSaved(updated);
            setEditing(false);
        };
        $[1] = onError;
        $[2] = onSaved;
        $[3] = post.id;
        $[4] = value;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const save = t1;
    let t2;
    if ($[6] !== editing || $[7] !== post.content || $[8] !== save || $[9] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3",
            children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "border rounded px-3 py-2 w-full min-h-[140px]",
                        value: value,
                        onChange: {
                            "InlineEditableContent[<textarea>.onChange]": (e)=>setValue(e.target.value)
                        }["InlineEditableContent[<textarea>.onChange]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 454,
                        columnNumber: 48
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: save,
                                className: "rounded bg-blue-600 text-white px-3 py-1",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 456,
                                columnNumber: 106
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "InlineEditableContent[<button>.onClick]": ()=>{
                                        setEditing(false);
                                        setValue(post.content);
                                    }
                                }["InlineEditableContent[<button>.onClick]"],
                                className: "rounded bg-gray-200 px-3 py-1",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 456,
                                columnNumber: 195
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 456,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 454,
                columnNumber: 43
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "whitespace-pre-wrap cursor-pointer",
                onClick: {
                    "InlineEditableContent[<p>.onClick]": ()=>setEditing(true)
                }["InlineEditableContent[<p>.onClick]"],
                title: "Click to edit content",
                children: post.content
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 461,
                columnNumber: 129
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 454,
            columnNumber: 10
        }, this);
        $[6] = editing;
        $[7] = post.content;
        $[8] = save;
        $[9] = value;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_s2(InlineEditableContent, "5BI4Qa0T4uOKRuoGPhT8f4zQtR4=");
_c2 = InlineEditableContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AdminDashboard");
__turbopack_context__.k.register(_c1, "InlineEditableTitle");
__turbopack_context__.k.register(_c2, "InlineEditableContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_dashboard_page_tsx_93de77fe._.js.map