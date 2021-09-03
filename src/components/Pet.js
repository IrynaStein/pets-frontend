import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pet.css";
import Birthday from "./Birthday";
import { useDispatch } from "react-redux";
import { deletePet } from "../store/petSlice";

export default function Pet({ pet }) {
  const [infoCard, setInfoCard] = useState(false);
console.log(pet.name)
const dispatch = useDispatch()
  const { name, birthday } = pet;
  const today = new Date().getDate();
  // const date = [(today.getMonth() + 1), today.getDate()]
  const age = birthday.split("-").slice(1);

  const currentAge = today - age[1];

  console.log(age);
  console.log(today);
  console.log(currentAge);

  const deleteHandler = () => {
    dispatch(deletePet(pet.id))
  }

  return (
    <div>
      
      <button className="button" onClick={deleteHandler}>x</button>
      <Link to={`/game/${pet.name}`}>
        <div className="pet-window" >
        <Birthday pet={pet}/>
        </div>
      </Link>

      <p
        style={{ cursor: "pointer" }}
        onClick={() => setInfoCard((mUV) => !mUV)}
      >
        {infoCard
          ? `show less info about ${name}`
          : `show more info about ${name}`}
      </p>
      {infoCard ? (
        <div className="info-card">
          <p>Name: {name}</p>
          <p>Breed: {pet.breed.name}</p>
          <p>Age: {currentAge} </p>
          <p>Favorite food: {pet.food.name}</p>
          <p>Favorite activity: {pet.activity.name}</p>
        </div>
      ) : null}
    </div>
  );
}
