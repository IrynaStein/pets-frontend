import "./GameContainer.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GamePet from "../components/GamePet";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function GameContainer({handleLogout}) {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector((state) => state.petList);
  console.log(pets);

  const currentPet = pets.filter((pet) => pet.name === params.petName);
  const renderPet = currentPet.map(p  => <GamePet key={p.id} pet={p}/>)

  return (
    <div className="game-container">
      <Header handleLogout={handleLogout}/>
      
      {renderPet}
    </div>
  );
}
