import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import CreatePet from "./pages/CreatePet";
import GameContainer from "./pages/GameContainer";
import Header from "./components/Header";
import {Fragment} from 'react'

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

  console.log(user);

  return (
    <Switch>
      <Route exact path="/home">
        {user ? (
          <HomePage user={user} onLogout={setUser} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/signup">
        {!user ? <SignupForm onLogin={setUser} /> : <Redirect to="/home" />}
      </Route>
      <Route exact path="/login">
        {!user ? <LoginForm onLogin={setUser} /> : <Redirect to="/home" />}
      </Route>
      <Route exact path="/game/:petName" component={GameContainer}>
          {/* <GameContainer /> */}
        </Route>
        <Route exact path="/create_pet">
          <CreatePet />
        </Route>
    </Switch>
  );
}

export default App;
