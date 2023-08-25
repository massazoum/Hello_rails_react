// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greeting />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
