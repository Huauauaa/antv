import React from 'react';
import './App.css';
import { renderRouters, routers } from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <Menu></Menu>
      {renderRouters(routers)}
    </Router>
  );
}

export default App;
