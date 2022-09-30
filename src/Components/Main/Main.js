import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import './Main.css';
import { insertToDoItem } from '../../services/client';

export default function Main() {
  const { user } = useContext(UserContext);
  const [toDoItem, setToDoItem] = useState('');
  
  if (!user) {
    return <Redirect to='/auth/sign-up' />;
  }
  return (
    <div>
      <label>Add Item to To Do List
        <input onChange={e => setToDoItem(e.target.value)}></input>
      </label>
      <button onClick={async () => {
        const resp = await insertToDoItem(toDoItem);
        console.log(resp);
        setToDoItem('');
      }}>Enter</button>
    </div>
  );
}
