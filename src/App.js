import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/auth/:authType' component={Auth} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
