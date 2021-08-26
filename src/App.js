import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from './Login'
import Signup from './Signup';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
