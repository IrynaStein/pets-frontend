import { Link } from "react-router-dom";
import { useState } from "react";
import {useSelector, useDispatch } from 'react-redux'
import {onLogin} from '../store/userSlice'

function LoginForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });
const dispatch = useDispatch()
const errors = useSelector(state => state.user.errors)
  function handleChange(e) {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(onLogin(formData))
    
  }

  return (
    <div className="App">
      <form className="centered-form-login" onSubmit={handleSubmit}>
        <input
          className="input-field-orange"
          onChange={(e) => handleChange(e)}
          value={formData.user_name}
          type="text"
          name="user_name"
          placeholder="user name..."
        ></input>
        <br />
        <input
          className="input-field-orange"
          onChange={(e) => handleChange(e)}
          value={formData.password}
          type="password"
          name="password"
          placeholder="password..."
        ></input>
        <br />
        <button className="button-regular">Login</button>
        <Link to="/signup">
          <button className="button-regular" type="submit">Signup</button>
        </Link>
        {errors.map((err) => <p key={err}>{err}</p>)}
      </form>
    </div>
  );
}

export default LoginForm;