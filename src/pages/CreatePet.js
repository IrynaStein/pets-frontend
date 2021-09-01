import { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import Header from "../components/Header";

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
    activity: ""
  });
  const [errors, setErrors] = useState([])

  const history = useHistory()

  const handleClick = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const configObj = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formData)
    }
    fetch('/pets', configObj)
    .then(resp => {
        if (resp.ok){
            resp.json()
        }
        else{
            resp.json().then((err) => setErrors(err.errors))
        }
    })
    // history.push('/game/:petName')
  }
  
  //   const dataInputHandler = (e) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     dispatch(petActions.createPet(formData))
  //   };

  return (
    <div>
      <Header/>
      <p>{errors}</p>
      <form className="createform-container" onSubmit={handleSubmit}>
        
        <label>Choose your pet's breed</label>
        <div>
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
<div>
  
        <input
        
          onClick={handleClick}
          type="radio"
          id="avocado"
          name="food"
          value="avocado"
        ></input>
        <label for="avocado">
          <img src={avocado} style={{ height: "25px"}} alt="avocado"/>
          avocado
        </label>

        <input
          onClick={handleClick}
          type="radio"
          id="icecream"
          name="food"
          value="icecream"
        ></input>
        <label for="icecream">
          <img src={icecream} style={{ height: "25px" }} alt="icecream"/>
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
          <img src={charcoal} style={{ height: "25px" }} alt="charcoal"/>
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
          <img src={strawberry} style={{ height: "25px" }} alt="strawberry"/>
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

        <input onClick={handleClick} type="radio" id="coding" name="activity" value="coding"></input>
        <label for="coding">coding</label>

        <input onClick={handleClick} type="radio" id="hiking" name="activity" value="hiking"></input>
        <label for="hiking">hiking</label>

        <input onClick={handleClick} type="radio" id="ball" name="activity" value="ball"></input>
        <label for="ball">ball</label>
        </div>
        <button className="button-inv" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
