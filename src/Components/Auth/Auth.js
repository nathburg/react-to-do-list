import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser, getUser } from '../../services/auth';
import './Auth.css';

export default function Auth() {
  const { authType } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sentInfo, setSentInfo] = useState(false);

  if (getUser()) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div className='nav-links'>
        <NavLink to='/auth/sign-in'>Sign In</NavLink>
        <NavLink to='/auth/sign-up'>Sign Up</NavLink> 
      </div>
      <div className='input-container'>
        <label>Email
          <input onChange={e => setEmail(e.target.value)} />
        </label>
        <label>Password
          <input onChange={e => setPassword(e.target.value)} />
        </label>
        <button onClick={async () => {
          await authUser(email, password, authType);
          setSentInfo(true);
        }}>Enter
        </button>
      </div>
    </div>
  );
}
