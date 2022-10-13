import { useEffect, useState } from 'react';
import { getToDoItems } from '../services/client';

export function useToDoItems() {
  const [toDoList, setToDoList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getToDoItems();
        setToDoList(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  return { toDoList, error, setToDoList };
}