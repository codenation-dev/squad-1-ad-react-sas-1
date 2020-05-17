import React from 'react';
import Router from './routes'
import {Provider} from "react-redux";
import './scss/theme/index.scss'
import './App.scss';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
      </Router>
    </Provider>
  );
}

export default App;
