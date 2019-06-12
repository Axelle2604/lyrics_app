import React from 'react';
import AppContainer from './components/AppContainer';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Lyrics from './components/Lyrics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={AppContainer} />
        <Route path="/lyrics" component={Lyrics} />
      </BrowserRouter>
    </div>
  );
}

export default App;
