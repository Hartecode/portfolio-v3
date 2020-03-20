import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
  const [hidden, setHidden] = useState(true)

  const toggle = () => setHidden(!hidden)

  const onGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHidden(true)
  }

  const onScrollToBio = () => {
    props.onGoToBio()
    setHidden(true)
  }

  const onScrollToProj = () => {
    props.onGoToProject()
    setHidden(true)
  }

  return (
    <header className={`app-header ${props.stickHeader ? 'sticky' : '' }`}>
      <nav className="nav-log-container">
        <button className="mobile-nav-btn logo" onClick={onGoToTop}>
          <h1> 
            <i>&#xe801;</i>harteCode /<i>&#xe802;</i>
          </h1>
        </button>
        
        <button
          className="mobile-nav-btn toggle-hamburger"
          onClick={toggle}>
          <i>&#xf0c9;</i>
        </button>
      </nav>
      
      <nav role="navigation" className={`${hidden ? 'hide' : ''} navbar`}>
        <button
          className="nav-button"
          onClick={onScrollToBio}>
          Bio
        </button>
        <button
          className="nav-button"
          onClick={onScrollToProj}>
          Projects
        </button>
      </nav>
    </header>
  );
}

export default Header;
