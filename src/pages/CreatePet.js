import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {createPet} from '../store/petSlice'


import "./CreatePet.css";

export default function CreatePet() {
  const avocado =
    "https://live.staticflickr.com/65535/51406867835_66995b93fb_o.png";
  const icecream =
    "https://live.staticflickr.com/65535/51405887526_9e7cbea55b_o.png";
  const charcoal =
    "https://live.staticflickr.com/65535/51406867940_6320a6a8a2_o.png";
  const strawberry =
    "https://live.staticflickr.com/65535/51405887496_2fb7bc4733_o.png";

  const [formData, setFormData] = useState({
    breed: "",
    name: "",
    food: "",
    activity: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector(state => state.pets.errors)
  const handleClick = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    console.log(formData)
    e.preventDefault();
    dispatch(createPet(formData));
    // history.push('/home')
  }

  return (
    <div>
       <>{errors === "Your pet was successfully created!" ? <Link to="/home">{errors}</Link> : errors}</>
      <form className="createform-container" onSubmit={handleSubmit}>
        <label>Choose your pet's breed</label>
        <div className="feature-container">
          <input
            onClick={handleClick}
            type="radio"
            id="tibbar"
            name="breed"
            value="tibbar"
          ></input>
          <label for="tibbar">Tibbar</label>

          <input
            onClick={handleClick}
            type="radio"
            id="drazzil"
            name="breed"
            value="drazzil"
          ></input>
          <label for="drazzil">Drazzil</label>
        </div>

        <label for="name">Name your pet</label>
        <div>
          <input
            onChange={handleClick}
            className="input-field"
            id="name"
            name="name"
            placeholder="pet name..."
            value={formData.name}
          ></input>
        </div>
        <label>Choose your pet's favorite snack</label>
        <div className="feature-container">
          <div className="feature-item">
          <img src={avocado} style={{ height: "25px" }} alt="avocado" />
          <div className="feature-item-button">
          <input
            onClick={handleClick}
            type="radio"
            id="avocado"
            name="food"
            value="avocado"
          ></input>
          <label for="avocado">
            avocado
          </label>
          </div>
          </div>
          <input
            onClick={handleClick}
            type="radio"
            id="icecream"
            name="food"
            value="icecream"
          ></input>
          <label for="icecream">
            <img src={icecream} style={{ height: "25px" }} alt="icecream" />
            icecream
          </label>

          <input
            onClick={handleClick}
            type="radio"
            id="charcoal"
            name="food"
            value="charcoal"
          ></input>
          <label for="charcoal">
            <img src={charcoal} style={{ height: "25px" }} alt="charcoal" />
            charcoal
          </label>

          <input
            onClick={handleClick}
            type="radio"
            id="strawberry"
            name="food"
            value="strawberry"
          ></input>
          <label for="strawberry">
            <img src={strawberry} style={{ height: "25px" }} alt="strawberry" />
            strawberry
          </label>
        </div>
        <label>Choose your pet's favorite activity</label>
        <div>
          <input
            onClick={handleClick}
            type="radio"
            id="swimming"
            name="activity"
            value="swimming"
          ></input>
          <label for="swimming">swimming</label>

          <input
            onClick={handleClick}
            type="radio"
            id="coding"
            name="activity"
            value="coding"
          ></input>
          <label for="coding">coding</label>

          <input
            onClick={handleClick}
            type="radio"
            id="hiking"
            name="activity"
            value="hiking"
          ></input>
          <label for="hiking">hiking</label>

          <input
            onClick={handleClick}
            type="radio"
            id="balling"
            name="activity"
            value="balling"
          ></input>
          <label for="balling">ball</label>
        </div>
        <button className="button-inv" type="submit">
          Create
        </button>
      </form>
     
    </div>
  );
}
