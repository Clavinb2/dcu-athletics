"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  function validateEmail(email: string) {
    return /.+@.+\..+/.test(email);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function showToast(type: 'success' | 'error', message: string) {
    setToastType(type);
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simple validation
    if (form.name.trim().length < 2) {
      showToast('error', 'Name is too short');
      return;
    }
    if (!validateEmail(form.email.trim())) {
      showToast('error', 'Invalid email');
      return;
    }
    if (form.message.trim().length < 10) {
      showToast('error', 'Message too short');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      showToast('success', 'Message sent! (demo only)');
    }, 1200);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 dark:text-yellow-400 text-center">Contact DCU Athletics</h1>
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded shadow-xl text-white font-semibold ${toastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{toast}</div>
      )}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Contact Form */}
        <form
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 dark:bg-gray-800"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-yellow-400">Get in Touch</h2>
          <input
            className="rounded border px-4 py-2 focus:ring-2 focus:ring-blue-400"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <input
            className="rounded border px-4 py-2 focus:ring-2 focus:ring-blue-400"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <textarea
            className="rounded border px-4 py-2 focus:ring-2 focus:ring-blue-400 min-h-[100px]"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <button className="rounded bg-blue-700 text-white px-6 py-2 hover:bg-blue-800 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 font-semibold mt-2" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg h-[350px] flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-yellow-400">Morton Stadium</h2>
          <iframe
            title="Morton Stadium Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.0142864437422!2d-6.263842483723161!3d53.39593048322252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e4e7e011bbb%3A0x6fe481ddacf57c36!2sMorton%20Stadium!5e0!3m2!1sen!2sie!4v1717093423805!5m2!1sen!2sie"
            width="50%"
            height="250"
            className="border-0 w-full rounded mb-2"
            style={{ minHeight: '230px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-gray-700 dark:text-gray-200 text-sm">Morton Stadium, Swords Rd, Santry, Dublin 9, Ireland</p>
        </div>
      </div>

      {/* Club Info & WhatsApp CTA */}
      <div className="mt-12 bg-blue-50 rounded-xl shadow-inner dark:bg-gray-800 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-yellow-400">Other Ways to Reach Us</h2>
        <div className="mb-4 text-lg text-gray-700 dark:text-gray-300">
          <p>Email: <a href="mailto:DCUAthleticsClub@gmail.com" className="text-blue-700 hover:underline dark:text-yellow-400">DCUAthleticsClub@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/dcuathletics/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline dark:text-yellow-400">@DCUAthletics</a></p>
        </div>
        <Link
          href="https://chat.whatsapp.com/Hlcmh9SXWKyDFx4sjQF9lY?mode=wwt"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg inline-block"
        >
          Join WhatsApp
        </Link>
      </div>
    </div>
  );
}
