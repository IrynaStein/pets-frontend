import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { userActions } from "../store/userSlice";

function SignupForm() {
  const defaultForm = {
    username: "",
    password: "",
    pass_conf: "",
    email: "",
  };
  const [formData, setFormdData] = useState(defaultForm);
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  function handleChange(e) {
    console.log(e.target.value);
    setFormdData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const configObg = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: formData.username,
        password: formData.password,
        password_confirmation: formData.pass_conf,
        email: formData.email,
      }),
    };
    fetch("/signup", configObg).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => dispatch(userActions.userLogin(user)));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }



  return (
    <div className="App">
      <Link to="login">
        <button className="button">&#8592;Back to Login</button>
      </Link>
      <form className="centered-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          name="username"
          value={formData.user_name}
          onChange={(e) => handleChange(e)}
          placeholder="user name..."
        ></input>
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          placeholder="password..."
        ></input>
        <br />
        <input
          className="input-field"
          name="pass_conf"
          type="password"
          value={formData.pass_conf}
          onChange={(e) => handleChange(e)}
          placeholder="confirm password..."
        ></input>
        <br />
        <input
          className="input-field"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          placeholder="email..."
        ></input>
        <br />
        <button className="button" type="submit">
          Signup
        </button>
        <p>
       {errors.map((error) => <>{error}</>)}
       </p>
      </form>
    </div>
  );
}
export default SignupForm;
