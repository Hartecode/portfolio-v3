import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import smoothscroll from 'smoothscroll-polyfill';
import cssVars from 'css-vars-ponyfill';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//polyfills
// polyfil for smooth scrolling on safari
smoothscroll.polyfill();
// polyfill for css variables in unsupported browsers
cssVars()