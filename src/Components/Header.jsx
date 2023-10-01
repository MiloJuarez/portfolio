import React from "react";

import "../styles/header.css";

const Header = ({ name, profile }) => {
    return (
        <div className='header'>
            <div>
                <div className='header__profile-navbar'>
                    <p>{profile}</p>
                </div>
                <div className='header__profile'>
                    <p className='header__title'>{name}</p>
                    <div className='header__profile-cover'></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
