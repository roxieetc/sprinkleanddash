import React from 'react';

function SearchForm({ handleSubmit, handleChange, searchString }) {

    return (
        <div className="navBar">
            <div className="navLinks">
            <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a> 
            <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a> 
            <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a> <a href=''>Category</a>
            <a href=''>Category</a> <a href=''>Category</a>
            </div>
        <form className = "form-horizontal">
            <input placeholder="Search for a recipe. . ."
                   type="text" />
            <button type="submit">Search</button>
        </form>
        </div>
    )
}

export default SearchForm;