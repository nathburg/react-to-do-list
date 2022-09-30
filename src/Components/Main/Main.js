import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import './Main.css';

export default function Main() {
  const { user } = useContext(UserContext);
  
  if (!user) {
    return <Redirect to='/auth/sign-up' />;
  }
  return (
    <div>Main</div>
  );
}
