import Logo from "../assets/logo.png"
import {useState} from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div className='header'>
            <img alt="logo" src={Logo} className='header-logo'/>
            <ul className='header-navigation-list'>
                <li className='header-navigation-list-item'>About</li>
                <li className='header-navigation-list-item'>Contacts</li>
                <li className='header-navigation-list-item'>Instamart</li>
                <li className='header-navigation-list-item'>Cart</li>
            </ul>
            {isLoggedIn ? 
                <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>: 
                <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
            }
        </div>
    )
};

export default Header;