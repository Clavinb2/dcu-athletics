export const metadata = {
  title: "About Us | DCU Athletics",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl shadow">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/HL7A0090-Enhanced-NR.JPEG"
          alt="DCU Athletics team at Morton Stadium"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-yellow-500/40" />
        <div className="relative px-6 py-16 sm:px-10 sm:py-20 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow">About DCU Athletics</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            One of Ireland’s most successful university athletics programmes, DCU Athletics nurtures student-athletes
            across sprints, endurance, throws, and jumps. Whether you’re new to the sport or chasing national medals,
            you’ll find the coaching, community, and competition pathway to thrive here.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Who We Are</h2>
          <p className="mt-3 text-gray-700">
            DCU Athletics is a welcoming, ambitious club representing Dublin City University at IUAA Intervarsity events
            and beyond. Our athletes compete in Road Relays, Indoor and Outdoor Track & Field, and Cross Country,
            with many progressing to international student competitions like the FISU World University Games.
          </p>
          <p className="mt-3 text-gray-700">
            We’re proud of our culture: hard work, smart training, and a supportive social scene that makes university
            life unforgettable.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Varsity%20XC%202025-081.JPG"
          alt="XC squad in action"
          className="h-72 w-full object-cover rounded-2xl shadow"
        />
      </section>

      {/* Facilities */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/HL7A1417-Enhanced-NR.JPEG"
          alt="Morton Stadium facilities"
          className="order-last md:order-first h-72 w-full object-cover rounded-2xl shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Morton Stadium: Our Home</h2>
          <p className="mt-3 text-gray-700">
            Train at Morton Stadium, Ireland’s National Athletics Stadium — a world-class venue less than 10 minutes
            from campus. From high-performance sessions to beginner workouts, we run structured groups across all
            event disciplines.
          </p>
        </div>
      </section>

      {/* Performance Pathway */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Performance Pathway</h2>
          <p className="mt-3 text-gray-700">
            Our coaching team supports progression from freshers to elite performers. Athletes target IUAA medals,
            national championships, and international selection. If you’re driven, we’ll match your ambition.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/HL7A7693-Enhanced-NR.jpg"
          alt="Sprint group session"
          className="h-72 w-full object-cover rounded-2xl shadow"
        />
      </section>

      {/* Photo grid */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700">Life in the Club</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/HL7A0913-Enhanced-NR.JPEG" alt="Relay changeover" className="h-40 w-full object-cover rounded-xl shadow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/IUAA%20Road%20Race%20Relays%20Maynooth%208th%20Nov%20%202024%20_139.JPEG" alt="Road relays" className="h-40 w-full object-cover rounded-xl shadow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Varsity%20XC%202025-437.JPG" alt="XC finish line" className="h-40 w-full object-cover rounded-xl shadow" />
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gradient-to-r from-blue-700 to-yellow-400 rounded-xl p-6 text-white shadow">
        <h2 className="text-2xl font-bold">Ready to join?</h2>
        <p className="mt-2 max-w-2xl">
          Whether you’re a beginner or a seasoned competitor, there’s a place for you at DCU Athletics. Come train,
          compete, and make friends for life.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="bg-green-500 text-white font-semibold px-5 py-2 rounded hover:bg-green-600" href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt" target="_blank" rel="noreferrer">Join WhatsApp</a>
          <a className="bg-white text-blue-700 font-semibold px-5 py-2 rounded hover:bg-blue-50" href="https://DCUClubsAndSocs.ie" target="_blank" rel="noreferrer">Join on DCUClubsAndSocs.ie</a>
          <a className="bg-white/10 border border-white/30 px-5 py-2 rounded" href="mailto:DCUAthleticsClub@gmail.com">Email: DCUAthleticsClub@gmail.com</a>
          <a className="bg-white/10 border border-white/30 px-5 py-2 rounded" href="https://instagram.com/DCUAthletics" target="_blank" rel="noreferrer">Instagram: @DCUAthletics</a>
        </div>
      </section>
    </div>
  );
}


