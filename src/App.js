import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main';
import Random from './Components/Random';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Nav from './Components/Nav.jsx';
import CategoryMeals from './Components/CategoryMeals';
import Recipe from './Components/Recipe';


const App = () => {

  return (
    <div className="App">
    <Router>
    <Header />
    <Nav />
    <Route exact path ='/random' component={Random} />
    <Route exact path='/categories' component={Categories} />
    <Route exact path='/categories/:meals' component={CategoryMeals} />
    <Route exact path='/recipe/:meals' component={Recipe} />
    <Route exact path='/' component={Main} />
    </Router>
    </div>
  );
}

export default App;
