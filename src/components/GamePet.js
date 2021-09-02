import "./GamePet.css";
import Birthday from "./Birthday";
import WellnessBar from "./WellnessBar";
import { useSelector } from "react-redux";

export default function GamePet({ pet }) {
  const {
    name,
    breed,
    activity,
    birthday,
    food,
    sleepy,
    bored,
    healthy,
    hungry,
    alive
  } = pet;

  const notification = useSelector(state => state.pets.notification)

  
  return (
    <>
    {alive? <div>
      {notification !== "" ? <p>{notification}</p> : <p>
        This is {name.toUpperCase()} the {breed.name.toUpperCase()}. His
        favorite food is {food.name} - if he behaves well treat him to one. His
        favorite activity is {activity.name}, so make sure to do that often.
      </p>}
      <div className="pet-display">
        <Birthday pet={pet} />
      </div>
        <WellnessBar pet={pet}/>
    </div>
    :
    <div style={{fontSize: "300px"}}>&#9760;</div>
  } 
    </>
  );
}
