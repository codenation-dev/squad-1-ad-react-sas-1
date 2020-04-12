import React from 'react';

import Header from './components/Header'
import Router from './routes'
import './App.scss';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
      </Router>
    </React.Fragment>
  );
}

export default App;
