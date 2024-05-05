import React from 'react';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Component/Quiz/Home';
import Quiz from './Component/Quiz/Quiz'

function App() {
  return (
    <div>
      <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      </BrowserRouter>  
    </div>
  );
}export default App

