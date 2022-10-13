import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
      {!user &&
        <div className='nav-links'>
          <NavLink to='/auth/sign-in'>Sign In</NavLink>
          <NavLink to='/auth/sign-up'>Sign Up</NavLink> 
        </div>} 
    </div>
          
  );
}  
