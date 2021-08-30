import classes from "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header({ handleLogout }) {
  return (
    <div className="header-container">
      <div className="dropdown" style={{ float: "right" }}>
        <div className="menu">&#9776;</div>
        <div className="dropdown-content">
          <NavLink activeClassName={classes.active} to="/home/game/:petName">
            Game rules
          </NavLink>
          <NavLink activeClassName={classes.active} to="/signup">
            Visit Cemetery
          </NavLink>
          <NavLink
            activeClassName={classes.active}
            to="#"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}
