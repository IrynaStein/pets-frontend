import classes from "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { userActions } from "../store/userSlice";
import { petActions } from "../store/petSlice";
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
        dispatch(petActions.resetState())
      }
    })
    
  }
  return (
    <div className="header-container">
      <div className="dropdown" style={{ float: "right" }}>
        <div className="menu">&#9776;</div>
        <div className="dropdown-content">
          <NavLink activeclassname={classes.active} to="/how-to-play">
            Game rules
          </NavLink>
          <NavLink activeclassname={classes.active} to="/cemetery">
            Visit Cemetery
           </NavLink>
            <NavLink exact to='/home' activeclassname={classes.active} >Home</NavLink>
            {user?<Link
            activeclassname={classes.active}
            exact to="/login"
            onClick={logoutHandler}
          >
            Logout
          </Link>
          : null}
        </div>
      </div>
    </div>
  );
}
