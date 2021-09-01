import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pet.css";
import Birthday from "./Birthday";

export default function Pet({ pet }) {
  const [infoCard, setInfoCard] = useState(false);
console.log(pet.name)
  const { name, birthday } = pet;
  const today = new Date().getDate();
  // const date = [(today.getMonth() + 1), today.getDate()]
  const age = birthday.split("-").slice(1);

  const currentAge = today - age[1];

  console.log(age);
  console.log(today);
  console.log(currentAge);

  function image() {
    switch (currentAge) {
      case 0:
        return pet.breed.age[0].image;
      case 1:
        return pet.breed.age[1].image;
      case 2:
        return pet.breed.age[2].image;
      case 3:
        return pet.breed.age[3].image;
      default:
        return pet.breed.age[3].image;
    }
  }

  return (
    <div>
      
      <button className="button">x</button>
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
