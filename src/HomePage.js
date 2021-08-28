import { useState, useEffect } from "react";
import Header from "./sections/Header";
import "./HomePage.css";
import User from "./sections/User";
import PetsContainer from "./sections/PetContainer";
import { Route, Switch } from "react-router";
import GameContainer from "./GameContainer";
import CreatePet from "./CreatePet";

export default function UserContainer({ user, onLogout }) {
  const [pets, setPets] = useState([]);
  console.log("user component");
  useEffect(() => {
    fetch("/pets")
      .then((resp) => resp.json())
      .then((data) => setPets(data));
  }, []);

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
      </div>
      <div className="wrapper">
        <User user={user} />
      </div>
      <div className="wrapper">
        <PetsContainer pets={pets} />
      </div>
    </div>
  );
}
