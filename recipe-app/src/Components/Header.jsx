import React from 'react';

function Header() {
  
  
  return (
    <div className="Header">
     <h2 className="appTitle">Sprinkle and Dash</h2>
     <div className="headerRight"><input type='text' placeholder="Search for recipes..."></input>
     <button>Search</button>
     </div>
    </div>
  );
}

export default Header;
