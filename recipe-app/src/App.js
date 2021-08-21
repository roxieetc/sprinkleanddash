import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main'
import Random from './Components/Random';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults'
import Categories from './Components/Categories'
import Nav from './Components/Nav.jsx'
import Footer from './Components/Footer'


const App = () => {


  return (
    <div className="App">
    <Router>
    <Header />
    <Nav />
    {/* <SearchForm />
    <SearchResults /> */}
    <Route exact path ='/random' component={Random} />
    <Route exact path='/categories' component={Categories}/>
    <Route exact path='/' component={Main} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
