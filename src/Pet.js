import { useState } from "react";
import { Redirect } from "react-router-dom";
import './Pet.css'

export default function Pet({ pet }) {
  const [infoCard, setInfoCard] = useState(false);

  console.log(pet);
  const { name, avatar, birthday } = pet;
  const today = new Date().getDate();
  // const date = [(today.getMonth() + 1), today.getDate()]
  const age = birthday.split("-").slice(1);

   const currentAge = today - age[1]
 
  console.log(age);
  console.log(today);
  console.log(currentAge);

  function image() {
    switch (currentAge) {
      case 0:
        return pet.breed.age_stages[0].image_url;
      case 1:
        return pet.breed.age_stages[1].image_url;
      case 2:
        return pet.breed.age_stages[2].image_url;
      case 3:
        return pet.breed.age_stages[3].image_url;
      default:
        return avatar;
    }
  }

  return (
    <div>
      <Redirect path='/game'><img className="pet-window" src={image()} /></Redirect>
      <p style ={{cursor: "pointer"}} onClick={()=> setInfoCard(mUV => !mUV)}>{infoCard ? `show less info about ${name}`: `show more info about ${name}`}</p>
      {infoCard? <div className="info-card">
        <p>Name: {name}</p>
        <p>Breed: {pet.breed.name}</p>
        <p>Age: {currentAge} </p>
        <p>Favorite food: {pet.food.name}</p>
        <p>Favorite activity: {pet.activity.name}</p>
        
      </div>
      :
      null
      }
      
    </div>
  );
}
