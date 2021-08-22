//Component to search for meal by ingredient
import React from "react";

function SearchForm() {

    return (
        <form className="form-horizontal">
            <input placeholder="Search for recipes..."
                   type="text" />
            <button type="submit">Search</button>
        </form>
        
    )
}


export default SearchForm;