import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderLogo from './assets/logo.jpg';
import Avatar from "./assets/avatar.png";

const Header = () => {
    return (
        <div className='header'>
            <img src={HeaderLogo} alt="logo" className="logo-image"/>
            <div>
                <input className="search-bar" placeholder='Search'/>
            </div>
            <img src={Avatar} className="avatar-img" alt="user"/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);
