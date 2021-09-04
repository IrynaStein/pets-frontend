import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";
import { useForm } from "react-hook-form";
import {userActions} from '../store/userSlice'

function SignupForm() {
  const dispatch = useDispatch();

  const history = useHistory();
  const errors = useSelector((state) => state.user.errors);
  console.log(errors);
  const { register, handleSubmit, reset } = useForm();

  const onFileChange = (e) => {
    console.log(e.target.files[0])
  }

  const onSubmit = (data, e) => {
    console.log(data.avatar[0]);
    e.preventDefault();
    dispatch(createUser(data));
    if (errors === "") {
     history.push("/home");
    } else {
      reset();
    }
  };
  return (
    <div className="App">
      <Link to="login">
        <button className="button">&#8592;Back to Login</button>
      </Link>
      
      <form className="centered-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="user-name"
          placeholder="user name..."
          {...register("user_name")}
        ></input>
        <br />
        <input
          className="input-field"
          name="password"
          type="password"
          placeholder="password..."
          {...register("password")}
        ></input>
        <br />
        <input
          className="input-field"
          name="password_confirmation"
          type="password"
          placeholder="confirm password..."
          {...register("password_confirmation")}
        ></input>
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="email..."
          {...register("email")}
        ></input>
        <br />
        <input type="file" name="avatar" {...register("avatar")} ></input>
        <button className="button" type="submit" >
          Signup</button>
        {errors}
      </form>
      
    </div>
  );
}
export default SignupForm;
