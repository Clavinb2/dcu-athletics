import Image from "next/image";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  image?: string | null;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE}/api/posts/`, { next: { revalidate: 30 } });
  if (!res.ok) {
    return [];
  }
  const data = await res.json();
  return Array.isArray(data) ? data : (data.results || []);
}

export default async function Home() {
  const posts = await fetchPosts();
  const topPosts = posts.slice(0, 3);
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl shadow min-h-[280px] sm:min-h-[400px] lg:min-h-[480px] flex items-center justify-center">
        {/* Background image + gradient overlay */}
        <Image
          src="/images/Hero.JPEG"
          alt="DCU Athletics hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-yellow-500/40" />
        <div className="relative w-full flex flex-col items-center justify-center text-center px-4 sm:px-10 py-10 sm:py-20 text-white">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold drop-shadow mb-3">DCU Athletics Club</h1>
          <p className="mt-1 mb-6 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto">
            DCU Athletics Club is proud to be one of the most successful university athletics programmes in Ireland,
            nurturing and supporting student-athletes across all event groups. Morton Stadium, our home ground, provides top-class facilities for all athletes. Beginners, social runners, and aspiring champions are all welcome.
          </p>
          <div className="mt-2 flex flex-col xs:flex-row flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            <a href="#join" className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-blue-50 w-full xs:w-auto">Join Now</a>
            <a href="/training" className="bg-blue-900/30 border border-white/30 px-5 py-2 rounded hover:bg-blue-900/40 w-full xs:w-auto">View Training</a>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-yellow-400 mb-4">How to Join</h2>
        <ol className="grid sm:grid-cols-3 gap-6">
          <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center dark:bg-gray-800">
            <span className="text-3xl font-bold bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2">1</span>
            <span className="font-lg font-semibold mb-1">Join the WhatsApp Group</span>
            <a href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt" rel="noopener noreferrer" target="_blank" className="underline mt-1 text-green-600 hover:text-green-700">Click here</a>
          </li>
          <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center dark:bg-gray-800">
            <span className="text-3xl font-bold bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2">2</span>
            <span className="font-lg font-semibold mb-1">Register via Clubs & Socs</span>
            <a href="https://dcuclubsandsocs.ie/" rel="noopener noreferrer" target="_blank" className="underline mt-1 text-blue-700 hover:text-blue-900">dcuclubsandsocs.ie</a>
          </li>
          <li className="bg-white rounded-xl shadow p-5 flex flex-col items-center dark:bg-gray-800">
            <span className="text-3xl font-bold bg-yellow-400 text-gray-900 rounded-full w-12 h-12 flex items-center justify-center mb-2">3</span>
            <span className="font-lg font-semibold mb-1">Attend training sessions</span>
            <a href="/training" className="underline mt-1 text-yellow-600 hover:text-yellow-800">See timetable</a>
          </li>
        </ol>
      </section>

      <section>
        <div className="grid sm:grid-cols-3 gap-3">
          <Image src="/images/HL7A1417-Enhanced-NR.JPEG" alt="Training" width={800} height={480} className="h-48 w-full object-cover rounded-xl shadow" sizes="(max-width: 640px) 100vw, 33vw" />
          <Image src="/images/IUAA%20Road%20Race%20Relays%20Maynooth%208th%20Nov%20%202024%20_308.JPEG" alt="Competition" width={800} height={480} className="h-48 w-full object-cover rounded-xl shadow" sizes="(max-width: 640px) 100vw, 33vw" />
          <Image src="/images/Varsity%20XC%202025-574.JPG" alt="Cross Country" width={800} height={480} className="h-48 w-full object-cover rounded-xl shadow" sizes="(max-width: 640px) 100vw, 33vw" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">IUAA Intervarsity Competitions</h2>
        <ul className="mt-3 grid sm:grid-cols-2 gap-2 list-disc pl-5">
          <li>Road Relays</li>
          <li>Indoor Track & Field Championships</li>
          <li>Cross Country Championships</li>
          <li>Outdoor Track & Field Championships</li>
        </ul>
        <p className="mt-3 text-gray-700">
          High-performing athletes may also be selected to compete at the FISU World University Games, representing DCU on the global stage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">Training Times 2025–2026</h2>
        <div className="mt-4 overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-3">Day</th>
                <th className="p-3">Time</th>
                <th className="p-3">Location</th>
              </tr>
            </thead>
            <tbody>
              {[
                { d: "Monday", t: "5pm–8pm", l: "Morton Stadium" },
                { d: "Tuesday", t: "5pm–7pm", l: "Morton Stadium" },
                { d: "Wednesday", t: "2pm–8pm", l: "Morton Stadium" },
                { d: "Thursday", t: "5pm–7pm", l: "Morton Stadium" },
                { d: "Friday", t: "2pm–6pm", l: "Morton Stadium" },
                { d: "Saturday", t: "10am–1pm", l: "Morton Stadium" },
                { d: "Sunday", t: "12:00–1pm", l: "Morton Stadium" },
              ].map((r) => (
                <tr key={r.d} className="border-b last:border-0">
                  <td className="p-3">{r.d}</td>
                  <td className="p-3">{r.t}</td>
                  <td className="p-3">{r.l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">Club Achievements 2024–2025</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold">IUAA Cross Country Championships</h3>
            <p>Men’s Team 1st</p>
            <p>Women’s Team 3rd</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold">IUAA Road Relays</h3>
            <p>Men’s Team 1st</p>
            <p>Women’s Team 3rd</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold">IUAA Indoor Track & Field Championships</h3>
            <p>Men's Team 1st</p>
            <p>Women's Team 1st</p>
            <p className="font-medium">Overall Team Winner</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold">IUAA Outdoor Track & Field Championships</h3>
            <p>Women’s Team 1st</p>
            <p className="font-medium">Overall Team Winner</p>
          </div>
        </div>
      </section>

      <section id="join" className="bg-gradient-to-r from-blue-700 to-yellow-400 rounded-xl p-6 text-white shadow">
        <h2 className="text-2xl font-bold">Join Now</h2>
        <p className="mt-2">Become part of DCU Athletics today.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-green-600" href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt" target="_blank" rel="noreferrer">Join WhatsApp</a>
          <a className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-blue-50" href="https://DCUClubsAndSocs.ie" target="_blank" rel="noreferrer">DCUClubsAndSocs.ie</a>
          <a className="bg-white/10 border border-white/30 px-5 py-2 rounded" href="mailto:DCUAthleticsClub@gmail.com">Email: DCUAthleticsClub@gmail.com</a>
          <a className="bg-white/10 border border-white/30 px-5 py-2 rounded" href="https://instagram.com/DCUAthletics" target="_blank" rel="noreferrer">Instagram: @DCUAthletics</a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">Latest News</h2>
        <div className="mt-4 space-y-6">
          {topPosts.map((post) => {
            const imageUrl = post.image
              ? post.image.startsWith('http')
                ? post.image
                : `${API_BASE}${post.image}`
              : null;
            return (
              <article key={post.id} className="bg-white rounded-xl shadow p-5">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  By {post.author} · {new Date(post.created_at).toLocaleDateString()}
                </p>
                {imageUrl && (
                  <Image src={imageUrl} alt={post.title} width={1200} height={630} className="rounded mb-4 w-full object-cover" sizes="(max-width: 640px) 100vw, 60vw" />
                )}
                <p className="whitespace-pre-wrap">{post.content}</p>
              </article>
            );
          })}
          {topPosts.length === 0 && (
            <p className="text-gray-600">No posts yet.</p>
          )}
        </div>
        <div className="mt-4">
          <a href="/news" className="text-blue-700 font-semibold hover:underline">View all news →</a>
        </div>
      </section>
    </div>
  );
}
