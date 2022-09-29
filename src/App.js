import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:authType' component={Auth} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
