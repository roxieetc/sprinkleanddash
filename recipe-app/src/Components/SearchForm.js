//Component to search for meal by ingredient
import React, { useState } from 'react';

function SearchForm() {

    const [search, setSearch] = useState("")
    console.log(search)

    return (
        <div className="navBar">
            <div className="navLinks">
            
            </div>
        <form className = "form-horizontal">
            <input placeholder="Search for a recipe. . ."
                   type="text"
                   name="search" 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   />
            <button type="submit">Search</button>
        </form>
        </div>
    )
}


export default SearchForm;