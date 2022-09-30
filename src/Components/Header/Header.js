import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='header'>
      <h1>To Do List</h1>
      {user && 
      <div className='welcome'>
        <div>Welcome {user.email}!
        </div>
        <a onClick={async () => {
          await signOut();
          setUser(null);
        }}>Log Out</a>                 
      </div>}
    </div>    
  );
}  
