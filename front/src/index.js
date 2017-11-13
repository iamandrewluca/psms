import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

window.jQuery = window.$ = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
