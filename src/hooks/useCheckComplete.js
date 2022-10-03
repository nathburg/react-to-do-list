import { useEffect, useState } from 'react';
import { checkCompleteStatus } from '../services/client';

export function useCheckComplete(id) {
  const [completeStatus, setCompleteStatus] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const { complete } = await checkCompleteStatus(id);
        setCompleteStatus(complete);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, [id]);

  return { completeStatus, error, setCompleteStatus };
}