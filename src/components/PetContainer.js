import "./PetContainer.css";
import Pet from "../components/Pet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PetsContainer() {
  const pets = useSelector((state) => state.pets.petList);
  console.log(pets);

  const renderPets = () =>
    pets.map((pet) => {
      if (pet.alive) {
        return <Pet key={pet.id} pet={pet} />;
      } else {
        return <div />;
      }
    });

  return (
    <div className="pet-container">
      <div className="centered-buttons">{pets.length <= 2 ? (
        <Link  className="button-gray" to="/create_pet">
          Create new pet
        </Link>
      ) : null}
      </div>
     
      {renderPets()}
    
    </div>
  );
}
