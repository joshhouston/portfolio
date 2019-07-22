import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import './App.css';
import routes from './routes';

function App() {
  return (
    <div>
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
