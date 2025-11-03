"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const backendAdminUrl = process.env.NEXT_PUBLIC_BACKEND_ADMIN || "http://localhost:8000/admin";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Redirecting to admin portal...");
    window.location.href = backendAdminUrl;
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Admin Login</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              className="w-full rounded border px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded border px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
            Go to Admin Portal
          </button>
        </form>
        {message && <p className="text-sm text-gray-600 mt-3">{message}</p>}
        <p className="text-xs text-gray-500 mt-4">
          Admin actions are handled via Django Admin.
        </p>
      </div>
    </div>
  );
}


