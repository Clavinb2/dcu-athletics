'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "How do I join DCU Athletics Club?",
    a: "Register via DCU Clubs & Socs portal."
  },
  {
    q: "Who can join?",
    a: "All DCU students (undergrad & postgrad), alumni, and staff are welcome. We have groups for all abilities, including beginners."
  },
  {
    q: "What does membership cost?",
    a: "Student membership is subsidised through DCU Clubs & Socs. Check the DCUClubsAndSocs.ie portal for up-to-date pricing. Alumni/staff rates may vary."
  },
  {
    q: "Do I need previous experience?",
    a: "No, we welcome all levels! Social runners, newbies, and elite athletes are all encouraged to join."
  },
  {
    q: "When/where is training held?",
    a: "Most club sessions are in Morton Stadium, Santry. See the Training page for detailed times."
  },
  {
    q: "Are there different training groups?",
    a: "Yes: Sprints, Distance, Jumps, Throws, and Social Runners, each with a dedicated coach. See Training page."
  },
  {
    q: "Do I have to compete?",
    a: "Competing is encouraged but not compulsory. Many members join for fitness or social running only."
  },
  {
    q: "How do I get on a competition team?",
    a: "Attend training, speak with your group coach, and participate in college trials/meets when scheduled."
  },
  {
    q: "Can I try out before committing?",
    a: "Absolutely—come along to a session and chat with current members before joining officially."
  },
  {
    q: "Where can I ask more questions?",
    a: "DM us on Instagram @DCUAthletics, email DCUAthleticsClub@gmail.com, or ask in the WhatsApp group."
  }
];

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-yellow-400 text-center">Frequently Asked Questions</h1>
      <div className="divide-y divide-blue-100 dark:divide-gray-700">
        {faqs.map((faq, idx) => (
          <div key={faq.q} className="py-4">
            <button className="w-full text-left flex justify-between items-center font-semibold text-lg text-blue-700 dark:text-yellow-300 focus:outline-none" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <span>{faq.q}</span>
              <span className="ml-2 text-xl">{openIdx === idx ? '–' : '+'}</span>
            </button>
            {openIdx === idx && <p className="mt-3 text-base text-gray-800 dark:text-gray-200">{faq.a}</p>}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-600" href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt" target="_blank" rel="noreferrer">Join the WhatsApp Group</a>
      </div>
    </div>
  );
}
