import "./GameContainer.css";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";

export default function GameContainer() {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector(state => state.petList)
  console.log(pets)

  const currentPet = pets
  .filter(pet => pet.name === params.petName)
  console.log(currentPet)
  const {name, breed, activity, birthday, food, sleepy, bored, healthy, hungry} = currentPet

  return (
    <div className="game-container">
      <p>Game Container</p>
      <p>{params.petName}</p>
      <img ></img>
    </div>
  );
}
