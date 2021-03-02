import React, {useState, useContext} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/Close.svg'
import Cart from './svg/Cart.svg'
import {Link} from 'react-router-dom'
import {DataContext} from './ProductsDetails'






function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">Shopping Cart</Link></h1>
            </div>
            
           
      
            <ul style={styleMenu}>
                
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/"></Link></li>
                <li><Link to="/signin">SignIn</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
      </header>
    )
}

export default Header