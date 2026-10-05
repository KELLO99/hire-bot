import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gtsmcowbvvqdqimjumajj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0c21jb3didnZqdW1hamoiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc5MTIxMzcwNCwiZXhwIjoyMTA2Nzg5NzA0fQ.cwgwU0t_Qee3bPFN7797KGXKq5PJ8LvL_S-12LMWFO0'
export const supabase = createClient(supabaseUrl, supabaseKey)
