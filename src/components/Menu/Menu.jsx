import logo from '../../assets/logo.svg'
import toggle from '../../assets/toggle.png'
import React from "react";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <img src={logo} alt="logo" className="App-logo"/>
            <h1>Pokemon</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src={toggle} alt="" className='toggle-icon'/>
            </div>
            
        </div>
    )
}

export default Menu;