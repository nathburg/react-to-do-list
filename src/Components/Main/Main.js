import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import './Main.css';
import { getToDoItems, insertToDoItem } from '../../services/client';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useToDoItems } from '../../hooks/useToDoList';

export default function Main() {
  const { user } = useContext(UserContext);
  const [toDoItem, setToDoItem] = useState('');
  const [submit, setSubmit] = useState(false);
  const { toDoList, setToDoList } = useToDoItems(submit);
  
  if (!user) {
    return <Redirect to='/auth/sign-up' />;
  }
  return (
    <div>
      <label>Add Item to To Do List
        <input value={toDoItem} onChange={e => setToDoItem(e.target.value)}></input>
      </label>
      <button onClick={async () => {
        await insertToDoItem(toDoItem);
        setToDoItem('');
        setSubmit(!submit);
      }}>Enter</button>
      {toDoList.map((item) =>
        <ToDoItem key={item.id} {...item} submit={submit} setSubmit={setSubmit} />
      )}
    </div>
  );
}
