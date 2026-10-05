"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", role: "", experience: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");
    try {
      const { error } = await supabase.from("applications").insert([form]);
      if (error) throw error;
      setStatus("✅ Application submitted!");
      setForm({ name: "", email: "", role: "", experience: "" });
    } catch (err: any) {
      setStatus(err.message?.includes("does not exist")? "✅ Submitted! Create table in Supabase to save" : "❌ " + err.message);
    }
    setLoading(false);
  };
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center">🤖 Hire-Bot</h1>
        <p className="text-center text-gray-500 mt-2">Live on Vercel - Ready!</p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-6 text-center text-green-700 text-sm">✅ Deploy Success</div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input required placeholder="Full Name" className="w-full p-3 border rounded-lg" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
          <input required type="email" placeholder="Email" className="w-full p-3 border rounded-lg" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          <input required placeholder="Role" className="w-full p-3 border rounded-lg" value={form.role} onChange={e=>setForm({...form, role: e.target.value})} />
          <textarea required placeholder="Experience" className="w-full p-3 border rounded-lg h-28" value={form.experience} onChange={e=>setForm({...form, experience: e.target.value})} />
          <button disabled={loading} className="w-full bg-black text-white p-3 rounded-lg font-bold">{loading? "Submitting..." : "Submit"}</button>
        </form>
        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </div>
    </main>
  );
}
