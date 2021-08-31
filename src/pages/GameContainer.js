import "./GameContainer.css";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import Birthday from "../components/Birthday";


export default function GameContainer() {
  const params = useParams();
  console.log(params.petName);
  const pets = useSelector(state => state.petList).filter(pet => pet.name === params.petName)
  console.log(pets)

//   const currentPet = pets
//   .filter(pet => pet.name === params.petName)
  console.log(pets)
  const {name, breed, activity, birthday, food, sleepy, bored, healthy, hungry} = pets
console.log(birthday)
  return (
    <div className="game-container">
      <p>Game Container</p>
      <p>{name}</p>
      <div className="pet-display">
      <Birthday pet={pets}/>
      </div>
      <p>{breed}</p>
      <p>{activity}</p>
    </div>
  );
}
