"use client"
import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function HireBot() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    role: "",
    experience: "",
    skills: "",
    salary: ""
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from("hires").insert([form])
    setLoading(false)
    if (!error) {
      setDone(true)
      setForm({ company_name: "", contact_name: "", email: "", role: "", experience: "", skills: "", salary: "" })
    } else {
      alert("Error: " + error.message)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2">🤖 Hire-Bot</h1>
        <p className="text-center text-gray-500 mb-8">Post your job in 30 seconds, we find talents!</p>

        {done && <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center font-bold">✅ Job Posted! We will contact you soon.</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-3 rounded-lg" placeholder="Company Name" required value={form.company_name} onChange={e=>setForm({...form, company_name: e.target.value})} />
          <input className="w-full border p-3 rounded-lg" placeholder="Your Name" required value={form.contact_name} onChange={e=>setForm({...form, contact_name: e.target.value})} />
          <input className="w-full border p-3 rounded-lg" type="email" placeholder="Work Email" required value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          <input className="w-full border p-3 rounded-lg" placeholder="Role Title (e.g. React Developer)" required value={form.role} onChange={e=>setForm({...form, role: e.target.value})} />
          <select className="w-full border p-3 rounded-lg" value={form.experience} onChange={e=>setForm({...form, experience: e.target.value})}>
            <option value="">Experience Level</option>
            <option>Junior (0-2 years)</option>
            <option>Mid (2-5 years)</option>
            <option>Senior (5+ years)</option>
          </select>
          <textarea className="w-full border p-3 rounded-lg" placeholder="Required Skills (e.g. React, Node, Arabic/English)" rows={3} required value={form.skills} onChange={e=>setForm({...form, skills: e.target.value})} />
          <input className="w-full border p-3 rounded-lg" placeholder="Salary Range (e.g. 5000-8000 SAR)" value={form.salary} onChange={e=>setForm({...form, salary: e.target.value})} />

          <button disabled={loading} className="w-full bg-black text-white p-4 rounded-lg font-bold text-lg hover:bg-gray-800">
            {loading? "Posting..." : "Post Job with Hire-Bot 🚀"}
          </button>
        </form>
      </div>
    </main>
  )
}
