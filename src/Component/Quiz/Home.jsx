import React from 'react';
import './Home.css';
import logo from '..//Quiz/logo.png';
import { Link } from 'react-router-dom';
function Home() {
  return (
  
     <div className="home-container">
     <img src={logo} alt="QuizInfos Logo" className="logo" />
     <h1 className="title">Welcome to Quiz IT Development</h1>
     <button className="start-button"><Link to="/quiz">Get Started</Link></button>
   </div>
  );
}

export default Home;
