import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Recipes from './Components/Recipes';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <Main />
    <Recipes />
    </div>
  );
}

export default App;
