import "./PetContainer.css";
import Pet from "../components/Pet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PetsContainer() {
  const pets = useSelector((state) => state.pets.petList);
  const renderPets = () => pets.map((pet) => <Pet key={pet.id} pet={pet} />);

  return (
    <div className="pet-container">
      {pets.length <= 2 ? <Link className="button-n" role="button" to="/create_pet">Create new pet</Link> : null}
      {renderPets()}
    </div>
  );
}
