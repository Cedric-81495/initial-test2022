import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

  
  function App() {
    
  return (
    <Router>
     <Navbar/>
      <Content/>
     
      <Footer/>
    </Router>
  );
}

export default App;
