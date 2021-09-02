import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch } from 'react-redux'
import { userActions } from "../store/userSlice";

function LoginForm() {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
const dispatch = useDispatch()
  function handleChange(e) {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: formData.username,
        password: formData.password,
      }),
    };
    fetch("/login", configObj)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => dispatch(userActions.userLogin(user)));
        } else {
          resp.json().then((error) => setErrors(error.errors));
        }
      })
  }

  return (
    <div className="App">
      <form className="centered-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          onChange={(e) => handleChange(e)}
          value={formData.username}
          type="text"
          name="username"
          placeholder="user name..."
        ></input>
        <br />
        <input
          className="input-field"
          onChange={(e) => handleChange(e)}
          value={formData.password}
          type="password"
          name="password"
          placeholder="password..."
        ></input>
        <br />
        <button className="button">Login</button>
        <Link to="/signup">
          <button className="button" type="submit">Signup</button>
        </Link>
        {errors.map((err) => <p>{err}</p>)}
      </form>
    </div>
  );
}

export default LoginForm;