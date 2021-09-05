import { useState} from 'react'
import { useForm } from "react-hook-form";
import './User.css'
import { useSelector, useDispatch } from 'react-redux'
import {deleteUser} from '../store/userSlice'
import { updateUser } from '../store/userSlice';


export default function User(){
    const [showForm, setShowForm] = useState(false)

    const user = useSelector(state => state.user.user)
    const {user_name, email, avatar, id} = user
    const preloadedValues ={
        user_name: user_name,
        email: email
    }
    const dispatch = useDispatch()
    const {register, handleSubmit, reset, errors} = useForm({
        defaultValues: preloadedValues
    })
    const deleteUserHandler = () => {
        dispatch(deleteUser(id))
    }

    const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
    dispatch(updateUser(data, id))
    setShowForm(false)
    reset()
    }

    return (
        <>
        
        {showForm ?  
     
        <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="re-enter password..."
          {...register("password", { required: true })}
        ></input>
        {/* {errors.password && <p>Password</p>} */}
        <br />
        <input
          className="input-field"
          name="password_confirmation"
          type="password"
          placeholder="confirm password..."
          {...register("password_confirmation", { required: "Please enter your first name." })}
        ></input>
        <br />
        <input
          className="input-field"
          name="email"
          placeholder="email..."
          {...register("email")}
        ></input>
        <br/>
        <button type="submit" >
          Update my profile</button>
          <br/>
          <button onClick={()=> setShowForm(false)}>Cancel</button>
      </form>
      
        : 
        <div className="user-container">
        <button onClick={()=> setShowForm(true)}>Edit profile</button>
        <button onClick={deleteUserHandler}> Delete profile</button>
        <img className="user-avatar" src={avatar} alt="user"/>
        <p>Hello {user_name}!</p>
        
        <p>You can create or edit your profile here. Below is the list of pets you own. You can also create up to 3 pets if you dont have any yet. Good luck!!! </p>
    </div>}
       </>
    )
}