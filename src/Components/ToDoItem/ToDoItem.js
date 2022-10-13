import './ToDoItem.css';
import { checkCompleteStatus, deleteToDoItem, getToDoItems, updateItemComplete } from '../../services/client';
import { useState } from 'react';
import { useCheckComplete } from '../../hooks/useCheckComplete';
import { useToDoItems } from '../../hooks/useToDoList';

export default function ToDoItem({ description, id, complete }) {
  console.log(complete);
  const [taskComplete, setTaskComplete] = useState(false);
  const { setToDoList } = useToDoItems();

  // const { completeStatus } = useCheckComplete(id);
  // setTaskComplete(completeStatus);
  return (
    <div className='to-do-item'>
      <div>{description}</div>
      {!taskComplete &&
      <div className='checkbox' onClick={async () => {
        await updateItemComplete(id);
        const resp = await checkCompleteStatus(id);
        console.log(resp.complete);
        // if (resp.complete) {
        //   setTaskComplete(true);
        // }  
      }}>⬜
      </div>} 
      {taskComplete &&
      <div className='checkbox'>✅
      </div>}
      <div className='delete' onClick={async () => {
        await deleteToDoItem(id);
        const newList = await getToDoItems();
        setToDoList(newList);
      }}>❌
      </div>
    </div>  
  );
}

