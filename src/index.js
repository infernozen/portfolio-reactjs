import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Overview from './Overview';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <About/>
    <Skills/>
    <Overview/>
    <Contact/>
  </React.StrictMode>
);

