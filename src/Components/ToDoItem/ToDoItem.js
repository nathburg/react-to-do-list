import './ToDoItem.css';
import { deleteToDoItem } from '../../services/client';
import { useState } from 'react';

export default function ToDoItem({ description, id, setSubmit, submit }) {
  const [taskComplete, setTaskComplete] = useState(false);
  return (
    <div className='to-do-item'>
      <div>{description}</div>
      {!taskComplete &&
      <div className='checkbox' onClick={() => setTaskComplete(true)}>⬜
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

