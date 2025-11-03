import Link from "next/link";
import Head from "next/head";
import { notFound } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

async function fetchPost(id: string) {
  const res = await fetch(`${API_BASE}/api/posts/${id}/`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

async function fetchRelated(tags: string[], excludeId: number) {
  if (!tags.length) return [] as any[];
  const params = new URLSearchParams({ tags: tags.join(',') });
  const res = await fetch(`${API_BASE}/api/posts/?${params.toString()}`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  const items = Array.isArray(data) ? data : (data.results || []);
  return items.filter((p: any) => p.id !== excludeId).slice(0, 4);
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }
  const siteUrl = "https://athletics.dcu.ie/news/" + post.id;
  const ogImage = post.image ? (post.image.startsWith("http") ? post.image : "https://athletics.dcu.ie" + post.image) : "https://athletics.dcu.ie/images/Club%20Logo.PNG";
  const newsSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": post.title,
      "description": post.content.substring(0, 150),
      "author": { "@type": "Person", "name": post.author },
      "datePublished": post.created_at,
      "image": ogImage,
      "mainEntityOfPage": siteUrl,
      "keywords": post.tags.join(", "),
      "publisher": {
        "@type": "Organization",
        "name": "DCU Athletics Club",
        "logo": { "@type": "ImageObject", "url": "https://athletics.dcu.ie/images/Club%20Logo.PNG" }
      }
  };
  const tags: string[] = post.tags || [];
  const related = await fetchRelated(tags, post.id);
  const imageUrl = post.image
    ? (post.image.startsWith('http') ? post.image : `${API_BASE}${post.image}`)
    : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head>
        <title>{post.title} | DCU Athletics</title>
        <meta name="description" content={post.content.substring(0, 150)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 150)} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.content.substring(0, 150)} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(newsSchema)}</script>
      </Head>
      <Link href="/news" className="text-blue-700 hover:underline dark:text-yellow-400">← Back to News</Link>
      <h1 className="text-3xl font-bold mb-2 text-blue-700 dark:text-yellow-400">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-3 dark:text-gray-400">By {post.author} · {new Date(post.created_at).toLocaleDateString()}</p>
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={post.title} className="rounded mb-4 w-full object-cover" />
      )}
      <div className="flex flex-wrap gap-1 mb-4">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
        ))}
      </div>
      <article className="prose dark:prose-invert max-w-none">{post.content}</article>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-yellow-300">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {related.map((r: any) => (
              <Link key={r.id} href={`/news/${r.id}`} className="block rounded border p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{new Date(r.created_at).toLocaleDateString()}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {(r.tags || []).map((t: string) => (
                    <span key={`${r.id}-${t}`} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
