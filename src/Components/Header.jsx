//All header elements and functions here
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
  const refresh = () => {
    
  }

  return (
    <div className="Header">
     <Link to='/'><h2 className="appTitle">Sprinkle & Dash</h2></Link>
     {/* <div className="headerRight"><input type='text' placeholder="Search for recipes..."></input>
     <button>Search</button>
     </div> */}
    </div>
  );
}

export default Header;
