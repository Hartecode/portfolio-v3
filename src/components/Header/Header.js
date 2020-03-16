import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="app-header">
      <button class="mobile-nav-btn logo" onClick={props.onLogo}>
        <h1> 
          <i>&#xe801;</i>harteCode /<i>&#xe802;</i>
        </h1>
      </button>
      
      <button class="mobile-nav-btn toggle-hamburger">
        <i>&#xf0c9;</i>
      </button>
      <nav role="navigation" class="navbar">
        <div id="bio" class="bio navbutton">
          <a href="#bioBox">Bio</a>
        </div>
        <div id="project" class="nav-button">
          <a href="#projectBox">Projects</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
