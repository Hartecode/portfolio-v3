import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(!hidden);

  return (
    <header className="app-header">
      <button className="mobile-nav-btn logo" onClick={props.onLogo}>
        <h1> 
          <i>&#xe801;</i>harteCode /<i>&#xe802;</i>
        </h1>
      </button>
      
      <button
        className="mobile-nav-btn toggle-hamburger"
        onClick={toggle}>
        <i>&#xf0c9;</i>
      </button>
      <nav role="navigation" className={`${hidden ? 'hide' : ''} navbar`}>
        <button
          className="nav-button"
          onClick={props.onGoToBio}>
          Bio
        </button>
        <button
          className="nav-button"
          onClick={props.onGoToProject}>
          Projects
        </button>
      </nav>
    </header>
  );
}

export default Header;
