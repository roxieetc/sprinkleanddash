import React from 'react';
import Main from './Components/Main';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import Categories from './Components/Categories'

function App() {

  return (
    <div className="App">
    
    <Header />
    <SearchForm />
    <Main />
    <Categories />
    </div>
  );
}

export default App;
