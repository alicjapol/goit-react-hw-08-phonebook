import { NavLink } from "react-router-dom";
import './Navigation.css'
export default function Navigation(){
    return (
 <div className="navContainer">     
    {/* //    <NavLink to="/" end className={({ isActive }) => isActive ? "navLink navLinkActive" : "navLink"}>
    //     Phonebook
    //   </NavLink> */}
      <NavLink to="/register" className={({ isActive }) => isActive ? "navLink navLinkActive" : "navLink"}>
        Register
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? "navLink navLinkActive" : "navLink"}>
        Login
      </NavLink>
      <NavLink to="/contacts" className={({ isActive }) => isActive ? "navLink navLinkActive" : "navLink"}>
        Contacts
      </NavLink>
    </div>
    )
}