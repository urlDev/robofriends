import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import * as serviceWorker from './serviceWorker';
import "tachyons";
// import { robots } from "./robots";
//we put curly braces because robots are not 
//default like Cards. when they are not default and you create something new, 
//its with braces


ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();