import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <>

    <h1 style={{ "color": "red" }}>App page</h1>
    <GlobalStyle />
  </>
);

export default App;
