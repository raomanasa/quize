import React from "react"
import { NavLink } from 'react-router-dom';
const Footer = () => {
return(
    <footer>
      <div >
      <button> <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/start'>START</NavLink></button>  
      </div>
    </footer>
  )
}
export default Footer