import "./PetContainer.css";
import Pet from "../components/Pet";
import { useEffect } from "react";
import { fetchPets } from "../store/petSlice";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export default function PetsContainer() {
  const pets = useSelector(state => state.petList)
  console.log(pets)
  // console.log(pets.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const renderPets = pets.map((pet) => <Pet key={pet.id} pet={pet} />);

  return (
    <div className="pet-container">
      {pets.length <= 2 ? (
        <Link to="/create_pet">
        <button>Create new pet</button>
      </Link>)
      :
      null
     } 
      {renderPets} 
    </div>
  );
}
