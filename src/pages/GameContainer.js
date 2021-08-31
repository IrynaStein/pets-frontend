import "./GameContainer.css";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import Birthday from "../components/Birthday";


export default function GameContainer() {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector(state => state.petList)
  console.log(pets)

  const currentPet = pets
  .filter(pet => pet.name === params.petName)[0]

  console.log(currentPet)
const {name, breed, activity, birthday, food, healthy, hungry, sleepy} = currentPet

  return (
    <div className="game-container">
      <p>Game Container</p>
     <p>This is {name} the {breed.name.toUpperCase()}. His favorite food is {food.name} - if he behaves well treat him to one. His favorite activity is {activity.name}ing, so make sure to do that often.</p>
      <div className="pet-display">
    {/* <Birthday pet={currentPet}/> */}
      </div>
      
    </div>
  );
}
