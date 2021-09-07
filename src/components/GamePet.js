import "./GamePet.css";
import Birthday from "../functions/Birthday";
import { useSelector } from "react-redux";

export default function GamePet() {
  
const pet =  useSelector(state => state.pets.pet)
const notification = useSelector(state => state.pets.notification)
const isLoading = useSelector(state => state.user.isLoading)
const user = useSelector(state => state.user.user)
  // const {
  //   name,
  //   breed,
  //   activity,
  //   food,
  //   alive
  // } = pet;
  if (!pet) return "Loading..."
  return (
    <> 
    {notification !== "" ? <div className="info-container"><div className="notification-container">{notification}</div></div> : <div className="info-container">
      <div className="notification-container">
        Hi! <br/>
        I am {pet.name.toUpperCase()} the {pet.breed.name.toUpperCase()}. <br/> My
        favorite food is {pet.food.name} - if I behave well give me some! My
        favorite activity is {pet.activity.name}, so lets play.
        </div></div>}
    {pet.alive? <>
      <div className="pet-display">
        <Birthday pet={pet} />
      </div>
    </>

    :

    <div className="ghost-display"><img src="https://live.staticflickr.com/65535/51425421314_73dab74c11_o.png" alt="ghost"/></div>
  }
    </>
  );
}

