import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { CreateAndJoin } from './components/Pages/createAndJoinClass';
import Home from './components/Pages/homePage';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Default</Link>
        <Link to="/home">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateAndJoin />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
