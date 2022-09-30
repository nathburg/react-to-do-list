import './ToDoItem.css';

export default function ToDoItem({ description }) {
  return (
    <div className='to-do-item'>
      <div>{description}</div>
      <div className='checkbox'>✅</div>
    </div>
  );
}
