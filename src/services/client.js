import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function insertToDoItem(description) {
  const resp = await client.from('to-do').insert([{ 'description': description }]);
  return checkError(resp);
}

