import React from 'react';
import './Greeting.css';

function Greeting({greeting, title, icons}) {

  const createMarkup = (val) => ({__html: val})

  const iconsDisplay = (arr) => (
    arr.map(val => (
      <div className="contactLink" key={val.name}>
        <a
          className="greetingIcons"
          href={val.link}
          rel="noopener noreferrer"
          aria-label={val.label}
          target="_blank" >      
          <i
            className="icon-large-size"
            dangerouslySetInnerHTML={createMarkup(val.code)}>
          </i>
          <span>{val.name}</span>
        </a>
      </div>
    ))
  )

  return (
    <section className="greeting">
      <div>
        <div className="statementGreeting">
          {greeting}
          <br/>
          {title}
        </div>
        <div className="contactGreeting">
          {iconsDisplay(icons)}
        </div>
      </div>
    </section>
  );
}

export default Greeting;
