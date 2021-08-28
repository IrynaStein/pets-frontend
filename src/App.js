import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import GameContainer from "./GameContainer";
import CreatePet from "./CreatePet";

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

  // if (!user) return <Login onLogin={setUser}/>

  return (
    <Switch>
      <Route exact path="/">
        {user ? (
          <HomePage user={user} onLogout={setUser} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route path="/signup">
        {!user ? <SignupForm onLogin={setUser} /> : <Redirect to="/" />}
      </Route>
      <Route exact path="/login">
        {!user ? <LoginForm onLogin={setUser} /> : <Redirect to="/" />}
      </Route>
      <Route exact path='/game'>
        <GameContainer/>
      </Route>
      <Route exact path='/create_pet'>
        <CreatePet/>
      </Route>
    </Switch>
  );
}

export default App;
