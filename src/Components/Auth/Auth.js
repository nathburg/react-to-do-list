import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import './Auth.css';

export default function Auth() {
  const { authType } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
          const resp = await authUser(email, password, authType);
          console.log(resp);
          console.log(authType);
        }}>Enter
        </button>
      </div>
    </div>
  );
}
