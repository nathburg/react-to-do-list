import './ToDoItem.css';
import { deleteToDoItem } from '../../services/client';

export default function ToDoItem({ description, id, setSubmit, submit }) {
  return (
    <div className='to-do-item'>
      <div>{description}</div>
      <div className='checkbox' onClick={async () => {
        await deleteToDoItem(id);
        setSubmit(!submit);
      }}>✅</div>
    </div>
  );
}
