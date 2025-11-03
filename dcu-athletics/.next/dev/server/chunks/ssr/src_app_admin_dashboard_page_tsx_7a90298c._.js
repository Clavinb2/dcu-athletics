module.exports = [
"[project]/src/app/admin/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
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
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        (async ()=>{
            const ok = await pingAuth();
            if (!mounted) return;
            setAuthed(ok);
            if (ok) {
                fetchPosts().then(setPosts).catch((e)=>setError(e.message));
            }
        })();
        return ()=>{
            mounted = false;
        };
    }, []);
    function showToast(type, message) {
        setToast({
            type,
            message
        });
        setTimeout(()=>setToast(null), 2500);
    }
    async function togglePublish(post) {
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
            showToast('error', 'Failed to update status');
            return;
        }
        const updated = await res.json();
        setPosts((prev)=>prev ? prev.map((p)=>p.id === post.id ? updated : p) : prev);
        showToast('success', updated.is_published ? 'Published' : 'Moved to draft');
    }
    async function remove(post) {
        if (!confirm(`Delete '${post.title}'?`)) return;
        const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "X-CSRFToken": getCsrfToken1()
            }
        });
        if (res.status !== 204) {
            showToast('error', 'Failed to delete');
            return;
        }
        setPosts((prev)=>prev ? prev.filter((p)=>p.id !== post.id) : prev);
        showToast('success', 'Deleted');
    }
    async function create(form) {
        const fd = new FormData(form);
        const t = (fd.get('title') || '').toString().trim();
        const c = (fd.get('content') || '').toString().trim();
        if (t.length < 3) {
            showToast('error', 'Title is too short');
            return;
        }
        if (c.length < 10) {
            showToast('error', 'Content is too short');
            return;
        }
        const res = await fetch(`${API_BASE}/api/posts/`, {
            method: "POST",
            credentials: "include",
            headers: {
                "X-CSRFToken": getCsrfToken1()
            },
            body: fd
        });
        if (!res.ok) {
            showToast('error', 'Failed to create');
            return;
        }
        const created = await res.json();
        setPosts((prev)=>prev ? [
                created,
                ...prev
            ] : [
                created
            ]);
        setCreating(false);
        form.reset();
        showToast('success', 'Post created');
    }
    function getCsrfToken1() {
        const match = document.cookie.match(/csrftoken=([^;]+)/);
        return match ? match[1] : "";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-blue-700 mb-4",
                children: "Admin Dashboard"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 112,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-6",
                children: "You must be logged in at the Django admin in this browser to manage posts. Cookies are reused."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 113,
                columnNumber: 4
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: `fixed top-4 right-4 rounded px-4 py-2 shadow text-white ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`,
                children: toast.message
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 115,
                columnNumber: 17
            }, this),
            authed === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded border border-yellow-200 bg-yellow-50 p-4 text-yellow-900 mb-6",
                children: [
                    "Not authenticated. Please ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "underline",
                        href: process.env.NEXT_PUBLIC_BACKEND_ADMIN || 'http://localhost:8000/admin/',
                        target: "_blank",
                        rel: "noreferrer",
                        children: "log in to Django admin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 120,
                        columnNumber: 47
                    }, this),
                    " and refresh this page."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 119,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setCreating((v)=>!v),
                    className: "rounded bg-blue-700 text-white px-4 py-2 hover:bg-blue-800",
                    children: creating ? "Close" : "New Post"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 124,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 123,
                columnNumber: 4
            }, this),
            creating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    create(e.currentTarget);
                },
                className: "bg-white rounded-xl shadow p-5 mb-6 grid gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "title",
                        required: true,
                        placeholder: "Title",
                        className: "border rounded px-3 py-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 131,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "content",
                        required: true,
                        placeholder: "Content",
                        className: "border rounded px-3 py-2 min-h-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 132,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm mb-1",
                                children: "Image"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 134,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                name: "image",
                                accept: "image/*",
                                className: "block"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 135,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 133,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "is_published",
                                defaultChecked: true,
                                className: "h-4 w-4",
                                id: "pub"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 138,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "pub",
                                children: "Published"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 139,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded bg-green-600 text-white px-4 py-2 hover:bg-green-700",
                        children: "Create"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 141,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 145,
                columnNumber: 14
            }, this),
            posts === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 146,
                columnNumber: 23
            }, this),
            posts && posts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "No posts yet."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 147,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: posts?.map((p)=>{
                    const imageUrl = p.image ? p.image.startsWith("http") ? p.image : `${API_BASE}${p.image}` : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "bg-white rounded-xl shadow p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineEditableTitle, {
                                post: p,
                                onSaved: (updated)=>setPosts((prev)=>prev ? prev.map((x)=>x.id === updated.id ? updated : x) : prev),
                                onError: (m)=>showToast('error', m)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 153,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>togglePublish(p),
                                        className: `rounded px-3 py-1 text-sm ${p.is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`,
                                        children: p.is_published ? 'Published' : 'Draft'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>remove(p),
                                        className: "rounded px-3 py-1 text-sm bg-red-100 text-red-700",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 154,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: new Date(p.created_at).toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 158,
                                columnNumber: 29
                            }, this),
                            imageUrl && // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: "",
                                className: "rounded mt-3 max-h-60 object-cover w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 161,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InlineEditableContent, {
                                post: p,
                                onSaved: (updated)=>setPosts((prev)=>prev ? prev.map((x)=>x.id === updated.id ? updated : x) : prev),
                                onError: (m)=>showToast('error', m)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 152,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this);
}
function InlineEditableTitle({ post, onSaved, onError }) {
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(post.title);
    async function save() {
        const title = value.trim();
        if (title.length < 3) {
            onError('Title is too short');
            return;
        }
        const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify({
                title
            })
        });
        if (!res.ok) {
            onError('Failed to save title');
            return;
        }
        const updated = await res.json();
        onSaved(updated);
        setEditing(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-3 mb-1",
        children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "border rounded px-2 py-1 w-full",
                    value: value,
                    onChange: (e)=>setValue(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 190,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: save,
                    className: "rounded bg-blue-600 text-white px-3 py-1",
                    children: "Save"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 191,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setEditing(false);
                        setValue(post.title);
                    },
                    className: "rounded bg-gray-200 px-3 py-1",
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 192,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 189,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold cursor-pointer",
            onClick: ()=>setEditing(true),
            title: "Click to edit title",
            children: post.title
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 195,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 187,
        columnNumber: 9
    }, this);
}
function InlineEditableContent({ post, onSaved, onError }) {
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(post.content);
    async function save() {
        const content = value.trim();
        if (content.length < 10) {
            onError('Content is too short');
            return;
        }
        const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify({
                content
            })
        });
        if (!res.ok) {
            onError('Failed to save content');
            return;
        }
        const updated = await res.json();
        onSaved(updated);
        setEditing(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "border rounded px-3 py-2 w-full min-h-[140px]",
                    value: value,
                    onChange: (e)=>setValue(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 219,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: save,
                            className: "rounded bg-blue-600 text-white px-3 py-1",
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 221,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setEditing(false);
                                setValue(post.content);
                            },
                            className: "rounded bg-gray-200 px-3 py-1",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 222,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 220,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 218,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "whitespace-pre-wrap cursor-pointer",
            onClick: ()=>setEditing(true),
            title: "Click to edit content",
            children: post.content
        }, void 0, false, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 226,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 216,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_admin_dashboard_page_tsx_7a90298c._.js.map