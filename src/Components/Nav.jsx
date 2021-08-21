import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navBar">
      <Link to='/'>
        <p>Home</p>
      </Link>
      
      <Link to='/categories'>
        <p>Categories</p>
      </Link>

      <Link to='/random'>
        <p>Random Meal</p>
      </Link>
     
     
    </div>
  );
}

export default Nav;
