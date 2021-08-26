import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from './Login'
import Signup from './Signup';
import User from './User';
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  if (!user) return <Login onLogin={setUser}/>;

  return (
    <Switch>
      <Route path="/">
        <User user={user} onLogout={setUser}/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
