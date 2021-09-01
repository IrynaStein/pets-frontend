import "./GamePet.css";
import Birthday from "./Birthday";
import WellnessBar from "./WellnessBar";

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
  } = pet;

  return (
    <div>
      <p>
        This is {name.toUpperCase()} the {breed.name.toUpperCase()}. His
        favorite food is {food.name} - if he behaves well treat him to one. His
        favorite activity is {activity.name}ing, so make sure to do that often.
      </p>
      <div className="pet-display">
        <Birthday pet={pet} />
      </div>
        <WellnessBar pet={pet}/>
    </div>
  );
}
