import "./PetContainer.css";
import Pet from "../components/Pet";
import { useEffect } from "react";
import { fetchPets } from "../store/petSlice";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function PetsContainer() {
  const pets = useSelector((state) => state.pets.petList);
  console.log(pets);
 
  const renderPets = () => {
    if (pets.errors) {
      return <h1>{pets.errors}</h1>;
    } else {
      return pets.map((pet) => <Pet key={pet.id} pet={pet} />);
    }
  };
//  const renderPets =() => pets.map((pet) => <Pet key={pet.id} pet={pet} />);
   

  return (
    <div className="pet-container">
      {pets.length <= 2 ? (
        <div>
          <Link to="/create_pet">
            <button>Create new pet</button>
          </Link>{" "}
        </div>
      ) : null}{" "}
      {renderPets()}
    </div>
  );
}
