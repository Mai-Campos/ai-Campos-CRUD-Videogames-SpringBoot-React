import React from 'react';
import './HeaderStyles.css';

const HeaderComponent = () => {
    return (
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <h1 className='title'>Life is a Game</h1></a>
            <div className='navbar-icons'>
                <img className="icon-navbar" width="64" height="64" src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/external-game-pad-home-activity-photo3ideastudio-lineal-color-photo3ideastudio.png" alt="Game Pad" />
                <img className="icon-navbar" width="48" height="48" src="https://img.icons8.com/doodle/48/super-mario.png" alt="Super Mario" />
                <img className="icon-navbar" width="50" height="50" src="https://img.icons8.com/color/50/skyrim.png" alt="skyrim"/> 
            </div>
        </div>
      </nav>
    );
};

export default HeaderComponent;