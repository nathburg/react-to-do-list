import { Redirect } from 'react-router-dom';
import { getUser } from '../../services/auth';
import Auth from '../Auth/Auth';

import './Main.css';

export default function Main() {
  if (!getUser()) {
    return <Redirect to='/auth/sign-up' />;
  }
  return (
    <div>Main</div>
  );
}
