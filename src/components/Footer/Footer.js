import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer role="contentinfo">
    <div>©2018 Sean Harte</div>
    <nav>
      <a
        href="https://github.com/Hartecode"
        rel="noopener"
        aria-label="Sean Harte's GitHub">
          <i className="githubIcon">&#xf09b;</i>
      </a>
      <a
        href="https://www.linkedin.com/in/seanharte/"
        rel="noopener"
        aria-label="Sean Harte's Linkedin">
          <i className="linkedinIcon">&#xf30c;</i>
      </a>
      <a
        href="mailto:seanharte@live.com" 
        rel="noopener"
        aria-label="Sean Harte's email">
          <i className="emailLink">&#xf0e0;</i>
      </a>
    </nav>
  </footer>
);

export default Footer;