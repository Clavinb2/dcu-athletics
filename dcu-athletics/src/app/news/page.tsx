"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  image?: string | null;
  tags?: string[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  async function fetchPosts() {
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (search.trim()) params.set("search", search.trim());
    if (selectedTags.length) params.set("tags", selectedTags.join(","));
    const res = await fetch(`${API_BASE}/api/posts/?${params.toString()}`, { cache: "no-store" });
    const data = await res.json();
    if (Array.isArray(data)) {
      setPosts(data);
      setCount(data.length);
    } else {
      setPosts(data.results || []);
      setCount(data.count || 0);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const t = setTimeout(() => {
      setPage(1);
      fetchPosts();
    }, 300);
    return () => clearTimeout(t);
  }, [search, selectedTags]);

  const availableTags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach(p => (p.tags || []).forEach(t => s.add(t)));
    return Array.from(s).sort();
  }, [posts]);

  const siteBase = "https://athletics.dcu.ie";

  return (
    <>
    <Head>
      <title>Latest News & Announcements | DCU Athletics</title>
      <meta name="description" content="DCU Athletics news, results, reports and announcements." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteBase}/` }, { "@type": "ListItem", "position": 2, "name": "News", "item": `${siteBase}/news` }],
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "DCU Athletics News",
        "url": `${siteBase}/news`,
        "blogPost": posts.map((post, i) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `${siteBase}/news/${post.id}`,
          "position": i + 1
        }))
      })}
      </script>
    </Head>
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-yellow-400">Latest News</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search news..."
          className="border rounded-full px-4 py-2 w-full sm:w-80"
          aria-label="Search news"
        />
        <div className="flex flex-wrap gap-2">
          {availableTags.map((t) => {
            const active = selectedTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => setSelectedTags((prev) => active ? prev.filter(x => x !== t) : [...prev, t])}
                className={`px-3 py-1 rounded-full text-sm border ${active ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-300'}`}
                aria-pressed={active}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => {
          const imageUrl = post.image
            ? post.image.startsWith('http')
              ? post.image
              : `${API_BASE}${post.image}`
            : null;
          return (
            <article key={post.id} className="bg-white rounded-xl shadow p-5 dark:bg-gray-700">
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-yellow-300">
                <Link href={`/news/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm mb-3 dark:text-gray-400">By {post.author} · {new Date(post.created_at).toLocaleDateString()}</p>
              {imageUrl && (
                <Image src={imageUrl} alt={post.title} width={1200} height={630} className="rounded mb-4 w-full object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
              )}
              <div className="flex flex-wrap gap-1 mb-2">
                {(post.tags || []).map((t) => (
                  <span key={`${post.id}-${t}`} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
                ))}
              </div>
              <p className="whitespace-pre-wrap line-clamp-4">{post.content}</p>
              <Link href={`/news/${post.id}`} className="mt-3 inline-block text-blue-700 hover:underline dark:text-yellow-400">Read more</Link>
            </article>
          );
        })}
        {posts.length === 0 && <p className="text-gray-600 dark:text-gray-300">No news found.</p>}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-4 py-2 rounded border disabled:opacity-50">Prev</button>
        <span className="text-sm text-gray-600 dark:text-gray-300">Page {page}</span>
        <button disabled={posts.length === 0 || (count !== 0 && page * 10 >= count)} onClick={() => setPage((p) => p + 1)} className="px-4 py-2 rounded border disabled:opacity-50">Next</button>
      </div>
    </div>
    </>
  );
}


