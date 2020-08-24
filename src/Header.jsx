import React from "react"
import { NavLink, Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <Link className="header item" to='/'>QUIZE</Link>
        <div className="right menu">
         <button> <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/start'>START</NavLink></button>
        </div>
      </div>
    </nav>
    )
}
export default Header