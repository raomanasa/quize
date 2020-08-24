import React from "react"
import {  Link } from 'react-router-dom';
 
const Header = () => {
  return (
    <nav className='ui fixed inverted menu'>
      <div className="ui container">
        <Link className="header item" to='/'>QUIZE</Link>
      </div>
    </nav>
    )
}
export default Header