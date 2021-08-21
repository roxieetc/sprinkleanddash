import React from 'react';
// import Random from './Components/Random';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults'
import Categories from './Components/Categories'


const App = () => {


  return (
    <div className="App">
    
    <Header />
    <h1>Pick A Category:</h1>
    {/* <SearchForm />
    <SearchResults /> */}
    {/* <Random /> */}
    <Categories />
    </div>
  );
}

export default App;
