import React from 'react';

import './index.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'



function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Route exact path="/"><Home /></Route>
        <Route exact path="/login"><Login /></Route></BrowserRouter>
    </div>
    </>
  );
}

export default App;
