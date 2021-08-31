
import Header from "../components/Header";
import "./HomePage.css";
import User from "../components/User"
import PetContainer from "../components/PetContainer";
// import { Route, Switch } from "react-router";
// import GameContainer from "./GameContainer";
// import CreatePet from "./CreatePet";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import { Fragment } from "react";

export default function UserContainer({ user, onLogout }) {
  // let match = useRouteMatch();
 

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        onLogout(null);
      }
    });
  }

  return (
 
    <div className="main-container">
      <div className="wrapper">
        <Header handleLogout={handleLogout} />
        {/* <Link to={`${match.url}/game`}>hi</Link> */}
      </div>
      <div className="wrapper">
        <User user={user} />
      </div>
      <div className="wrapper">
        <PetContainer/>
      </div>
      
      {/* <Route path={`${match.url}/game`}>
        <GameContainer pets={pets} />
      </Route> */}
      
    </div>
    
  
  );
}
