import { supabase } from './supabase.js'

export async function saveJob(job) {
  const { data, error } = await supabase.from('jobs').insert([job]).select()
  if (error) console.log(error)
  return data
}

export async function getJobs() {
  const { data } = await supabase.from('jobs').select('*').order('created_at', { ascending: false })
  return data
}

export async function saveCandidate(candidate) {
  const { data, error } = await supabase.from('candidates').insert([candidate]).select()
  if (error) console.log(error)
  return data
}
