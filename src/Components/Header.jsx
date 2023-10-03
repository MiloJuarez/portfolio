import React from "react";

import "../styles/header.css";
import profileCover from "../assets/img/profile.jpg";

const Header = ({ name, profile }) => {
    return (
        <div className='header'>
            <div>
                <div className='header__profile-navbar'>
                    <h4>{profile}</h4>
                </div>
                <div className='header__profile'>
                    <h2 className='header__title'>
                        <span property='title'>{name}</span>
                    </h2>
                    <img
                        src='https://avatars.githubusercontent.com/u/48868937?v=4'
                        className='header__profile-cover'></img>
                </div>
            </div>
        </div>
    );
};

export default Header;
