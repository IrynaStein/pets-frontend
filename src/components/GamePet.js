import "./GamePet.css";
import Birthday from "../functions/Birthday";
import WellnessBar from "./WellnessBar";
import { useSelector } from "react-redux";

export default function GamePet() {
  
const pet =  useSelector(state => state.pets.pet)
const notification = useSelector(state => state.pets.notification)
  const {
    name,
    breed,
    activity,
    food,
    alive
  } = pet;
  
  return (
    <>
    {notification !== "" ? <div className="info-container"><p>{notification}</p></div> : <div className="info-container"><p>
        Hi! <br/>
        I am {name.toUpperCase()} the {breed.name.toUpperCase()}. <br/> My
        favorite food is {food.name} - if I behave well give me some! My
        favorite activity is {activity.name}, so lets play.
        </p></div>}
    {alive? <>
      <div className="pet-display">
        <Birthday pet={pet} />
      </div>
        <WellnessBar/>
    </>
    :
    <div className="pet-display"><img src="https://live.staticflickr.com/65535/51425421314_73dab74c11_o.png"/></div>
  } 
    </>
  );
}

