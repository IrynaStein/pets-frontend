import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";
import { useForm } from "react-hook-form";
import {userActions} from '../store/userSlice'

function SignupForm() {
  const dispatch = useDispatch();
const errors = useSelector(state => state.user.errors)
  // const history = useHistory();
  // const errors = useSelector((state) => state.user.errors);
  // console.log(errors);
  // const { register, handleSubmit, reset } = useForm();

  // const onFileChange = (e) => {
  //   console.log(e.target.files[0])
  // }

  // const onSubmit = (data, e) => {
   
  //   console.log(data);
  //   e.preventDefault();
  //   dispatch(createUser(data));
  //   if (errors === "") {
  //    history.push("/home");
  //   } else {
  //     reset();
  //   }
  // };
  // return (
  //   <div className="App">
  //     <Link className="button-regular" to="login">
  //       &#8592;Back to Login
  //     </Link>
      
  //     <form className="centered-form-signup" onSubmit={handleSubmit(onSubmit)}>
  //       <input
  //         className="input-field-orange"
  //         name="user-name"
  //         placeholder="user name..."
  //         {...register("user_name", {required: true})}
  //       ></input>
  //       <br />
  //       <input
  //         className="input-field-orange"
  //         name="password"
  //         type="password"
  //         placeholder="password..."
  //         {...register("password", {required: true})}
  //       ></input>
  //       <br />
  //       <input
  //         className="input-field-orange"
  //         name="password_confirmation"
  //         type="password"
  //         placeholder="confirm password..."
  //         {...register("password_confirmation", {required: true})}
  //       ></input>
  //       <br />
  //       <input
  //         className="input-field-orange"
  //         name="email"
  //         placeholder="email..."
  //         {...register("email", {required: true})}
  //       ></input>
  //       <br />
  //       <input className="input-field-orange" type="file" name="avatar" {...register("avatar")} ></input>
  //       <br />
  //       <button className="button-regular" type="submit" >
  //         Signup</button>
  //       {errors}
  //     </form>
      
  //   </div>
  // );
  const defaultForm = {
    username: "",
    password: "",
    pass_conf: "",
    email: "",
    avatar: ""
  }
  const [formData, setFormdData] = useState(defaultForm)

  function handleChange(e){
    console.log(e.target.value)
    setFormdData({...formData, [e.target.name]: e.target.value})
  }
  function handleFileUpload(e){
    console.log(e.target.value)
    setFormdData({...formData, avatar: e.target.files[0]})
  }
    
  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    const configObg = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: formData.username,
        password: formData.password,
        password_confirmation: formData.pass_conf,
        email: formData.email,
        avatar: formData.avatar
      })
    }
    fetch('/signup', configObg)
    .then(resp=> resp.json())
    .then(data=> console.log(data))
  }
    return (
        <div className="App">
          {errors}
          <Link to='login'><button className="button">&#8592;Back to Login</button></Link>
          {/* {errors.map(
          (err, ind) => `${ind + 1}. ${err}, `)} */}
      <form className="centered-form" onSubmit={handleSubmit}>
      <input className="input-field" name="username" value={formData.user_name} onChange={(e)=>handleChange(e)} placeholder="user name..."></input>
      <br/>
      <input className="input-field" name="password" value={formData.password} onChange={(e)=>handleChange(e)} placeholder="password..."></input>
      <br/>
      <input className="input-field" name="pass_conf" value={formData.pass_conf} onChange={(e)=>handleChange(e)} placeholder="confirm password..."></input>
      <br/>
      <input className="input-field" name="email" value={formData.email} onChange={(e)=>handleChange(e)} placeholder="email..."></input>
      <br/>
      <input className="input-field" type="file" name="avatar" onChange={(e)=>handleFileUpload(e)} placeholder="email..."></input>
      <button className="button" type="submit">Signup</button>
      </form>
      
    </div>
    )
}
export default SignupForm;
