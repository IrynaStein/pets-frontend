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
      <Link className="button-regular" to="login">
        &#8592;Back to Login
      </Link>
      
      <form className="centered-form-signup" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field-orange"
          name="user-name"
          placeholder="user name..."
          {...register("user_name", {required: true})}
        ></input>
        <br />
        <input
          className="input-field-orange"
          name="password"
          type="password"
          placeholder="password..."
          {...register("password", {required: true})}
        ></input>
        <br />
        <input
          className="input-field-orange"
          name="password_confirmation"
          type="password"
          placeholder="confirm password..."
          {...register("password_confirmation", {required: true})}
        ></input>
        <br />
        <input
          className="input-field-orange"
          name="email"
          placeholder="email..."
          {...register("email", {required: true})}
        ></input>
        <br />
        <input className="input-field-orange" type="file" name="avatar" {...register("avatar")} ></input>
        <br />
        <button className="button-regular" type="submit" >
          Signup</button>
        {errors}
      </form>
      
    </div>
  );
}
export default SignupForm;
