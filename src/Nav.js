import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./userContext";
import "./Nav.css";

/** shows the routes based on if the current user exists
 *  prop: logout function
 *
 */
function Nav({logout}) {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <nav className="NavBar d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center ms-4" style={{ width: "1px" }}>
          <NavLink className="text-light" to="/">Friender</NavLink>
        </div>
        <div className="d-flex align-items-center me-3">
          <NavLink to="/login">Login </NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="NavBar d-flex justify-content-between">
        <div className="d-flex align-items-center ms-4" style={{ width: "1px" }}>
          <NavLink to="/">Friender</NavLink>
        </div>
        <div className="d-flex align-items-center me-3" >
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/" onClick={logout}> Log Out </NavLink>
        </div>



      </nav >
    );
  }
}

export default Nav;
