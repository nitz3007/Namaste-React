import Logo from "../assets/logo.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const navigate = useNavigate();
    const IsOnline = useOnline();

    return (
        <div className='header'>
            <Link to="/">
                <img alt="logo" src={Logo} className='header-logo'/>
            </Link>
            <ul className='header-navigation-list'>
                <Link to="/about">
                    <li className='header-navigation-list-item'>About</li>
                </Link>
                <Link to="/contacts">
                    <li className='header-navigation-list-item'>Contacts</li>
                </Link>
                <Link to="/instamart">
                    <li className='header-navigation-list-item'>Instamart</li>
                </Link>
                
                <li className='header-navigation-list-item'>Cart</li>
            </ul>
            {IsOnline ? "Online":"Offline"}
            {isLoggedIn ? 
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    navigate("/login");
                }}>Logout</button>: 
                <button onClick={()=>{setIsLoggedIn(true);}}>Login</button>
            }
        </div>
    )
};

export default Header;