import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx'
 
ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);

// setInterval(function() {
//   ReactDOM.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>,
//     document.getElementById('app')
//   );
// },1000)