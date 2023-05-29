import Logo from "../assets/logo.png";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useOnline from "../utils/useOnline";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const navigate = useNavigate();
    const IsOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItemsCount = useSelector(store=>store.cart.totalItemCount);

    const handleAvatarClick = ()=> {
        setShowAvatarDropdown((prev) => !prev);
    }

    return (
        <div className='flex justify-between items-center border-b-2 px-12'>
            <Link to="/">
                <img alt="logo" src={Logo} className='w-16'/>
            </Link>
            <ul className='flex '>
                <Link to="/about" className="font-sans font-semibold mx-4 hover:text-[#fc8019]">
                    <li className='header-navigation-list-item'>About</li>
                </Link>
                <Link to="/contacts" className="font-sans font-semibold mx-4 hover:text-[#fc8019]">
                    <li className='header-navigation-list-item'>Contacts</li>
                </Link>
                <Link to="/instamart" className="font-sans font-semibold mx-4 hover:text-[#fc8019]">
                    <li className='header-navigation-list-item'>Instamart</li>
                </Link>
                <Link to="/cart" className="font-sans font-semibold mx-4 hover:text-[#fc8019]">
                <li className="font-sans font-semibold mx-4 hover:text-[#fc8019]">{`Cart(${cartItemsCount})`}</li>
                </Link>
                
            </ul>
            {/* <span>{user.name}</span> */}
            <div className="relative">
                
                <div className="bg-[#bcd6ce] p-2 rounded-full relative w-12 h-12 flex justify-center items-center" onClick={handleAvatarClick} onBlur={()=>(setShowAvatarDropdown(false))}>
                    <FontAwesomeIcon icon={faUser} size='lg' color="#008080"/>
                    {IsOnline ? 
                        <div className="w-4 h-4 rounded-full bg-[#6be048] border-2 border-white bottom-0 right-0 absolute"></div>:
                        <div className="w-4 h-4 rounded-full bg-[#e80505] border-2 border-white bottom-0 right-0 absolute"></div>
                    }
                </div>
                {showAvatarDropdown && 
                    <ul className="absolute list-none bg-slate-50 border-2 rounded-md w-32 -left-10">
                        <li className="pb-2 pt-2 pl-4 pr-4 border-b-2 hover:bg-slate-200">
                        {isLoggedIn ? 
                            <button onClick={()=>{
                                setIsLoggedIn(false);
                                navigate("/login");
                            }}>Logout</button>: 
                            <button onClick={()=>{setIsLoggedIn(true);}}>Login</button>
                        }
                        </li>
                        <li className="pl-4 pr-4 pt-2 pb-2 hover:bg-slate-200">
                            <h4>Profile</h4>
                        </li>
                    </ul>
                }
            </div>
           
        </div>
    )
};

export default Header;