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
import Cemetery from "./pages/Cemetery";
import GameRules from "./pages/GameRules";
import { useState } from "react";

function App() {
// const [isLoading, setIsLoading] = useState(true)
const user = useSelector(state => state.user.user)
const isLoading = useSelector(state => state.user.isLoading)
const dispatch = useDispatch()
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(userActions.userLogin(user))
          dispatch(userActions.toogleLoading(false))
        }
        );
      } else {
        dispatch(userActions.toogleLoading(false))
      }
    });
  }, [dispatch]);


  console.log(user);

  return (
    <>
    <Header/>
    {isLoading ? " Loading .." :
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
        { user ? <GameContainer/> : <Redirect to="/home"/>}
      </Route>
      <Route exact path="/create_pet">
        { user? <CreatePet/> : <Redirect to="/home"/>}
      </Route>
      <Route exact path="/cemetery">
        <Cemetery/>
      </Route>
      <Route exact path="/how-to-play">
        <GameRules/>
      </Route>
    </Switch>}
    </>
  );
}

export default App;
