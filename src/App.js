import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import CreatePet from "./pages/CreatePet";
import GameContainer from "./pages/GameContainer";
import {useSelector, useDispatch } from 'react-redux'
import { userActions } from "./store/userSlice";
import Header from "./components/Header";


function App() {

const user = useSelector(state => state.user.user)
const dispatch = useDispatch()
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(userActions.userLogin(user)));
      }
    });
  }, [dispatch]);


  console.log(user);

  return (
    <>
    {user? <Header/>: null}
    <Switch>
      <Route exact path="/home">
        {user ? (
          <HomePage/>
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <Route exact path="/login">
        {!user ? <LoginForm /> : <Redirect to="/home" />}
      </Route>
      <Route exact path="/game/:petName" >
        {/* { user? <GameContainer/> : <Redirect to="/home"/>} */}
        <GameContainer />
      </Route>
      <Route exact path="/create_pet">
        {/* { user? <CreatePet/> : <Redirect to="/home"/>} */}
        <CreatePet/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
