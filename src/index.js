//import React from 'react'; 
/*import ReactDOM from 'react-dom/client';
import App from './App';

//const myFirstElement = <h1>Hello React!</h1>
<h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/

/*import ReactDOM from 'react-dom/client';
//import App from './App';

<body>
  <div id="root"></div>
</body>

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);*/

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cat from './Cat.js';

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = (
    <> 
      <h1 className='color'> {text} </h1> 
      <input type='text'/> 
    </>
  )

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myElement);

function Car(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>
}

root.render(<Car color="red"/>);

root.render(<Cat />);
*/

import ReactDOM from 'react-dom/client';
import App from "./App.js";
import Counter from './Counter.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
