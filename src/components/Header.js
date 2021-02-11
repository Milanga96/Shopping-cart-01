import React from 'react';
//import "Header.css";
import {Link} from 'react-router-dom'
import Cart from '../components/svg/Cart.svg'
import AAA from '../components/svg/AAB.jpg'
const Header =()=>{
  return (
    <header>
    <div className="logo">
      <h1>
        <img src={AAA} alt="" width="500" height="120" />
      </h1>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li>
        <input type="name" placeholder="search"/>
      </li>
      <li></li>
      <li><Link to="/login">LOGIN/REGISTER</Link></li>
    
    <li>
      
   <img src={Cart} alt=''  width="50"/>
    </li>
    </ul>
  </header>
)
}

export default Header;