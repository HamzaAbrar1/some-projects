import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Colors from './Colors';
import Stars from './Stars';
import Changetheme from './Changetheme';
import Imageslider from './Imageslider';
import Tabs from './tabs';
import LoadContent from './LoadContent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Colors  /> */}
    {/* <Stars no={10}/> */}
    {/* <Changetheme/> */}
   
    {/* <Imageslider/> */}
    {/* <LoadContent/> */}
<Tabs/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
