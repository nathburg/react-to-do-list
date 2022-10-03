import './ToDoItem.css';
import { checkCompleteStatus, deleteToDoItem, updateItemComplete } from '../../services/client';
import { useState } from 'react';
import { useCheckComplete } from '../../hooks/useCheckComplete';

export default function ToDoItem({ description, id, setSubmit, submit }) {
  
  const [taskComplete, setTaskComplete] = useState(false);
  const { completeStatus } = useCheckComplete(id);
  setTaskComplete(completeStatus);
  return (
    <div className='to-do-item'>
      <div>{description}</div>
      {!taskComplete &&
      <div className='checkbox' onClick={async () => {
        await updateItemComplete(id);
        const resp = await checkCompleteStatus(id);
        console.log(resp.complete);
        if (resp.complete) {
          setTaskComplete(true);
        }  
      }}>⬜
      </div>} 
      {taskComplete &&
      <div className='checkbox'>✅
      </div>}
      <div className='delete' onClick={async () => {
        await deleteToDoItem(id);
        setSubmit(!submit);
      }}>❌
      </div>
    </div>  
  );
}

