import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const formatName = function (name) {
    return name.firstName + " " + name.lastName;
}

const name = {
    firstName: "Jade", 
    lastName: "Ko",
};
const element = <h1>Hello, {formatName(name)}!</h1>
// const element = <h1>Hello, {name.firstName + " " + name.lastName}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
