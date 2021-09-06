import classes from "./Header.css";
import { NavLink } from "react-router-dom";
import { userActions } from "../store/userSlice";
import {useSelector, useDispatch} from 'react-redux'

export default function Header() {
// const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
const user = useSelector(state => state.user.user)
  
  const logoutHandler =()=>{
    fetch("/logout", {
      method: "DELETE"
    })
    .then((resp) => {
      if (resp.ok){
        dispatch(userActions.userLogout())
      }
    })
    
  }
  return (
    <div className="header-container">
      <div className="dropdown" style={{ float: "right" }}>
        <div className="menu">&#9776;</div>
        <div className="dropdown-content">
          <NavLink activeclassname={classes.active} to="/home/game/:petName">
            Game rules
          </NavLink>
          <NavLink activeclassname={classes.active} to="/cemetery">
            Visit Cemetery
           </NavLink>
           {user? <><NavLink exact to='/home' activeclassname={classes.active} >Home</NavLink>
         <NavLink
            activeclassname={classes.active}
            exact to="#"
            onClick={logoutHandler}
          >
            Logout
          </NavLink></>
          : null}
        </div>
      </div>
    </div>
  );
}
