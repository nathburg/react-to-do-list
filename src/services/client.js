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

export async function getToDoItems() {
  const resp = await client.from('to-do').select('*');
  return checkError(resp);
}

export async function deleteToDoItem(id) {
  const resp = await client.from('to-do').delete().match({ 'id': id });
  return checkError(resp);
}

export async function updateItemComplete(id) {
  const resp = await client.from('to-do').update({ 'complete': true }).match({ id });
  return checkError(resp);
}

export async function checkCompleteStatus(id) {
  const resp = await client.from('to-do').select('complete').match({ id }).single();
  return checkError(resp);
}
