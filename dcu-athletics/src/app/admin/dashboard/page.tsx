"use client";

import { useEffect, useMemo, useState } from "react";

type Post = {
	id: number;
	title: string;
	content: string;
	image?: string | null;
	is_published: boolean;
	created_at: string;
	updated_at: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

async function fetchPosts(): Promise<Post[]> {
	const res = await fetch(`${API_BASE}/api/posts/`, {
		credentials: "include",
		headers: { "Accept": "application/json" },
	});
	if (!res.ok) throw new Error("Failed to load posts (are you logged in?)");
	return res.json();
}

async function pingAuth(): Promise<boolean> {
    const res = await fetch(`${API_BASE}/api/auth/ping/`, { credentials: "include" });
    return res.ok;
}

export default function AdminDashboard() {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [creating, setCreating] = useState(false);
    const [authed, setAuthed] = useState<boolean | null>(null);
    const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            const ok = await pingAuth();
            if (!mounted) return;
            setAuthed(ok);
            if (ok) {
                fetchPosts().then(setPosts).catch((e) => setError(e.message));
            }
        })();
        return () => { mounted = false; };
    }, []);

    function showToast(type: 'success' | 'error', message: string) {
        setToast({ type, message });
        setTimeout(() => setToast(null), 2500);
    }

    async function togglePublish(post: Post) {
		const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"X-CSRFToken": getCsrfToken(),
			},
			body: JSON.stringify({ is_published: !post.is_published }),
		});
        if (!res.ok) { showToast('error', 'Failed to update status'); return; }
		const updated = await res.json();
		setPosts((prev) => prev ? prev.map((p) => p.id === post.id ? updated : p) : prev);
        showToast('success', updated.is_published ? 'Published' : 'Moved to draft');
	}

    async function remove(post: Post) {
		if (!confirm(`Delete '${post.title}'?`)) return;
		const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
			method: "DELETE",
			credentials: "include",
			headers: { "X-CSRFToken": getCsrfToken() },
		});
        if (res.status !== 204) { showToast('error', 'Failed to delete'); return; }
		setPosts((prev) => prev ? prev.filter((p) => p.id !== post.id) : prev);
        showToast('success', 'Deleted');
	}

    async function create(form: HTMLFormElement) {
		const fd = new FormData(form);
        const t = (fd.get('title') || '').toString().trim();
        const c = (fd.get('content') || '').toString().trim();
        if (t.length < 3) { showToast('error', 'Title is too short'); return; }
        if (c.length < 10) { showToast('error', 'Content is too short'); return; }
		const res = await fetch(`${API_BASE}/api/posts/`, {
			method: "POST",
			credentials: "include",
			headers: { "X-CSRFToken": getCsrfToken() },
			body: fd,
		});
        if (!res.ok) { showToast('error', 'Failed to create'); return; }
		const created: Post = await res.json();
		setPosts((prev) => prev ? [created, ...prev] : [created]);
		setCreating(false);
		form.reset();
        showToast('success', 'Post created');
	}

	function getCsrfToken(): string {
		const match = document.cookie.match(/csrftoken=([^;]+)/);
		return match ? match[1] : "";
	}

    return (
		<div>
			<h1 className="text-3xl font-bold text-blue-700 mb-4">Admin Dashboard</h1>
			<p className="text-sm text-gray-600 mb-6">You must be logged in at the Django admin in this browser to manage posts. Cookies are reused.</p>
            {toast && (
                <div role="status" className={`fixed top-4 right-4 rounded px-4 py-2 shadow text-white ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{toast.message}</div>
            )}

            {authed === false && (
                <div className="rounded border border-yellow-200 bg-yellow-50 p-4 text-yellow-900 mb-6">
                    Not authenticated. Please <a className="underline" href={process.env.NEXT_PUBLIC_BACKEND_ADMIN || 'http://localhost:8000/admin/'} target="_blank" rel="noreferrer">log in to Django admin</a> and refresh this page.
                </div>
            )}
			<div className="mb-4">
				<button onClick={() => setCreating((v) => !v)} className="rounded bg-blue-700 text-white px-4 py-2 hover:bg-blue-800">{creating ? "Close" : "New Post"}</button>
			</div>
			{creating && (
				<form
					onSubmit={(e) => { e.preventDefault(); create(e.currentTarget); }}
					className="bg-white rounded-xl shadow p-5 mb-6 grid gap-3"
				>
					<input name="title" required placeholder="Title" className="border rounded px-3 py-2" />
					<textarea name="content" required placeholder="Content" className="border rounded px-3 py-2 min-h-[120px]" />
					<div>
						<label className="block text-sm mb-1">Image</label>
						<input type="file" name="image" accept="image/*" className="block" />
					</div>
					<div className="flex items-center gap-2">
						<input type="checkbox" name="is_published" defaultChecked className="h-4 w-4" id="pub" />
						<label htmlFor="pub">Published</label>
					</div>
					<button type="submit" className="rounded bg-green-600 text-white px-4 py-2 hover:bg-green-700">Create</button>
				</form>
			)}

			{error && <div className="text-red-700">{error}</div>}
			{posts === null && <div>Loading…</div>}
			{posts && posts.length === 0 && <div className="text-gray-600">No posts yet.</div>}
            <div className="grid gap-4">
				{posts?.map((p) => {
					const imageUrl = p.image ? (p.image.startsWith("http") ? p.image : `${API_BASE}${p.image}`) : null;
					return (
                        <article key={p.id} className="bg-white rounded-xl shadow p-5">
                            <InlineEditableTitle post={p} onSaved={(updated) => setPosts((prev) => prev ? prev.map((x) => x.id === updated.id ? updated : x) : prev)} onError={(m) => showToast('error', m)} />
								<div className="flex items-center gap-2">
									<button onClick={() => togglePublish(p)} className={`rounded px-3 py-1 text-sm ${p.is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.is_published ? 'Published' : 'Draft'}</button>
									<button onClick={() => remove(p)} className="rounded px-3 py-1 text-sm bg-red-100 text-red-700">Delete</button>
								</div>
                            <p className="text-gray-600 text-sm">{new Date(p.created_at).toLocaleString()}</p>
                            {imageUrl && (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={imageUrl} alt="" className="rounded mt-3 max-h-60 object-cover w-full" />
							)}
                            <InlineEditableContent post={p} onSaved={(updated) => setPosts((prev) => prev ? prev.map((x) => x.id === updated.id ? updated : x) : prev)} onError={(m) => showToast('error', m)} />
						</article>
					);
				})}
			</div>
		</div>
	);
}

function InlineEditableTitle({ post, onSaved, onError }: { post: Post; onSaved: (p: Post) => void; onError: (m: string) => void }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(post.title);
    async function save() {
        const title = value.trim();
        if (title.length < 3) { onError('Title is too short'); return; }
        const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
            method: 'PATCH', credentials: 'include', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRFToken': getCsrfToken() }, body: JSON.stringify({ title })
        });
        if (!res.ok) { onError('Failed to save title'); return; }
        const updated = await res.json();
        onSaved(updated);
        setEditing(false);
    }
    return (
        <div className="flex items-center justify-between gap-3 mb-1">
            {editing ? (
                <div className="flex-1 flex items-center gap-2">
                    <input className="border rounded px-2 py-1 w-full" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={save} className="rounded bg-blue-600 text-white px-3 py-1">Save</button>
                    <button onClick={() => { setEditing(false); setValue(post.title); }} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                </div>
            ) : (
                <h2 className="text-xl font-semibold cursor-pointer" onClick={() => setEditing(true)} title="Click to edit title">{post.title}</h2>
            )}
        </div>
    );
}

function InlineEditableContent({ post, onSaved, onError }: { post: Post; onSaved: (p: Post) => void; onError: (m: string) => void }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(post.content);
    async function save() {
        const content = value.trim();
        if (content.length < 10) { onError('Content is too short'); return; }
        const res = await fetch(`${API_BASE}/api/posts/${post.id}/`, {
            method: 'PATCH', credentials: 'include', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRFToken': getCsrfToken() }, body: JSON.stringify({ content })
        });
        if (!res.ok) { onError('Failed to save content'); return; }
        const updated = await res.json();
        onSaved(updated);
        setEditing(false);
    }
    return (
        <div className="mt-3">
            {editing ? (
                <div>
                    <textarea className="border rounded px-3 py-2 w-full min-h-[140px]" value={value} onChange={(e) => setValue(e.target.value)} />
                    <div className="mt-2 flex items-center gap-2">
                        <button onClick={save} className="rounded bg-blue-600 text-white px-3 py-1">Save</button>
                        <button onClick={() => { setEditing(false); setValue(post.content); }} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                    </div>
                </div>
            ) : (
                <p className="whitespace-pre-wrap cursor-pointer" onClick={() => setEditing(true)} title="Click to edit content">{post.content}</p>
            )}
        </div>
    );
}


