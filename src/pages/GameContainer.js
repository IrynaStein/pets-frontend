import { useEffect } from "react";
import "./GameContainer.css";
import GamePet from "../components/GamePet";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchPets } from "../store/petSlice";
import {petActions} from '../store/petSlice'

export default function GameContainer() {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector((state) => state.pets.petList);
  
  console.log(pets);
const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchPets())
  }, [dispatch])

  // const currentPet = pets.filter((pet) => pet.name === params.petName);
  // dispatch(petActions.gamePet(currentPet))
  dispatch(petActions.gamePet(pets.find((pet) => pet.name === params.petName)))
  // const renderPet = currentPet.map(p  => <GamePet key={p.id} pet={p}/>)

  return (
    <div className="game-container">
      {/* {renderPet} */}
      <GamePet/>
    </div>
  );
}
