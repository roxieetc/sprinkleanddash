import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import Recipes from './Components/Recipes';

function App() {

  return (
    <div className="App">
    
    <Header />
    <SearchForm />
    {/* <Recipes /> */}
    <Main />
    </div>
  );
}

export default App;
