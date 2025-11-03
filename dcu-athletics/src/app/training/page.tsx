export const metadata = {
  title: "Training | DCU Athletics",
};

export default function TrainingPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-blue-700">Training</h1>
        <p className="mt-2 text-gray-700">Our programme supports all groups: sprints, middle/long distance, jumps, and throws.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">Weekly Schedule (2025–2026)</h2>
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
        <p className="mt-3 text-gray-700">Sessions are structured; exact times for specific groups are communicated weekly.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-700">Training Groups</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold">Sprints (60–400m)</h3>
            <p className="text-gray-600">Coach: <span className="font-medium">Kay Bannon</span></p>
            <p className="mt-2 text-gray-700">Acceleration, max‑velocity, and speed endurance blocks with technical drills and strength pairing. Ideal for beginners up to national finalists.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold">Distance (800m–XC)</h3>
            <p className="text-gray-600">Head Coach: <span className="font-medium">Joe Ryan</span></p>
            <p className="mt-2 text-gray-700">Threshold, VO₂, long runs and race‑specific work. Groups for developing runners through to high‑performance athletes targeting IUAA and national medals.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold">Jumps (LJ/TJ/HJ)</h3>
            <p className="text-gray-600">Coach: <span className="font-medium">Colm Bourke</span></p>
            <p className="mt-2 text-gray-700">Approach consistency, plyometrics, and take‑off mechanics with strength and mobility support. Individualised technical feedback each week.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold">Throws</h3>
            <p className="text-gray-600">Coach: <span className="font-medium">David Sweeney</span> (National Team Coach)</p>
            <p className="mt-2 text-gray-700">Shot, discus, hammer and javelin coaching with progressive technical progressions and S&amp;C integration.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-semibold">Social Runners</h3>
            <p className="text-gray-600">Coach: <span className="font-medium">Cian Gorham</span> (Student Athlete)</p>
            <p className="mt-2 text-gray-700">Easy‑pace group focused on fitness, fun, and consistency. Perfect for newcomers and recreational runners building towards 5k–10k or trying club training for the first time.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-yellow-400 rounded-xl p-6 text-white shadow">
        <h2 className="text-2xl font-bold">Join a Group</h2>
        <p className="mt-2">Unsure where to start? Drop into any session at Morton Stadium or message us and we’ll place you with the right group.</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a className="bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-green-600" href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt" target="_blank" rel="noreferrer">Join WhatsApp</a>
          <a className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-blue-50" href="https://DCUClubsAndSocs.ie" target="_blank" rel="noreferrer">Join on DCUClubsAndSocs.ie</a>
          <a className="bg-white/10 border border-white/30 px-5 py-2 rounded" href="mailto:DCUAthleticsClub@gmail.com">Email the Club</a>
        </div>
      </section>
    </div>
  );
}


