import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import TeamSection from './pages/TeamSection';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teamSection' element={<TeamSection />} />
        <Route path='/searchResults' element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
