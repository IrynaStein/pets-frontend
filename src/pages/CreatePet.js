import { Fragment } from "react";
import "./CreatePet.css";
export default function CreatePet() {
    const avocado = "https://live.staticflickr.com/65535/51406867835_66995b93fb_o.png"
    const icecream = "https://live.staticflickr.com/65535/51405887526_9e7cbea55b_o.png"
    const charcoal = "https://live.staticflickr.com/65535/51406867940_6320a6a8a2_o.png"
    const strawberry = "https://live.staticflickr.com/65535/51405887496_2fb7bc4733_o.png"

    const handleClick = (e) => {
        console.log({[e.target.name]: e.target.value})
    }
  return (
    <div>
      <h1>create new pet</h1>

      <form className="creatform-container">
        <label>Choose your pet's breed</label>
        <input
          className="input-field"
          onClick={handleClick}
          type="radio"
          id="tibbar"
          name="breed"
          value="tibbar"
        ></input>
        <label for="tibbar">Tibbar</label>

        <input
          className="input-field"
          onClick={handleClick}
          type="radio"
          id="drazzil"
          name="breed"
          value="drazzil"
        ></input>
        <label for="drazzil">Drazzil</label>
        <br />
        <label for="name">Name your pet</label>
        <input
          className="input-field"
          id="name"
          name="name"
          placeholder="pet name..."
        ></input>

        <br />

        <input
          className="input-field"
          type="checkbox"
          id="avocado"
          name="avocado"
        ></input>
        <label for="avocado">
          <img
            src={avocado}
            style={{ height: "25px" }}
          />
          avocado
        </label>

        <input
          className="input-field"
          type="checkbox"
          id="icecream"
          name="icecream"
        ></input>
        <label for="icecream">
          <img
            src={icecream}
            style={{ height: "25px" }}
          />
          icecream
        </label>

        <input
          className="input-field"
          type="checkbox"
          id="charcoal"
          name="charcoal"
        ></input>
        <label for="charcoal">
          <img
            src={charcoal}
            style={{ height: "25px" }}
          />
          charcoal
        </label>

        <input
          className="input-field"
          type="checkbox"
          id="strawberry"
          name="strawberry"
        ></input>
        <label for="strawberry">
          <img
            src={strawberry}
            style={{ height: "25px" }}
          />
          strawberry
        </label>

        <br />
        <input
          className="input-field"
          type="checkbox"
          id="swimming"
          name="swimming"
        ></input>
        <label for="swimming">swimming</label>

        <input
          className="input-field"
          type="checkbox"
          id="coding"
          name="coding"
        ></input>
        <label for="coding">coding</label>

        <input
          className="input-field"
          type="checkbox"
          id="hiking"
          name="hiking"
        ></input>
        <label for="hiking">hiking</label>

        <input
          className="input-field"
          type="checkbox"
          id="ball"
          name="ball"
        ></input>
        <label for="ball">ball</label>
        <br />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
