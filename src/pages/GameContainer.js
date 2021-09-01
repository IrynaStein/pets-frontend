import { useEffect } from "react";
import "./GameContainer.css";
import GamePet from "../components/GamePet";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchPets } from "../store/petSlice";

export default function GameContainer({handleLogout}) {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector((state) => state.pets.petList);
  
  console.log(pets);
const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchPets())
  }, [dispatch])

  const currentPet = pets.filter((pet) => pet.name === params.petName);
  const renderPet = currentPet.map(p  => <GamePet key={p.id} pet={p}/>)

  return (
    <div className="game-container">
      <Header handleLogout={handleLogout}/>
      
      {renderPet}
    </div>
  );
}
