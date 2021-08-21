//Component to search for meal by ingredient
import React from "react";

function SearchForm({ handleSubmit, handleChange, searchString }) {

    return (
        <form className="form-horizontal">
            <input placeholder="Search for recipes..."
                   type="text"
                   name="searchString"
                   required
                   onChange={handleChange}
                   value={searchString} />
            <button type="submit">Search</button>
        </form>
        
    )
}


export default SearchForm;



// const [search, setSearch] = useState("")
//     console.log(search)

//     const handleChange = (e) => {
//         setSearch(e.target.value);
//     }

//     const resetSearch = () => {
//         setSearch("");
//     }

//     const callSearch = (e) => {
//         e.preventDefault();
//         props.search(search);
//         resetSearch();
//     }




{/* <form className = "form-horizontal">
<input placeholder="Search for a recipe. . ."
       type="text"
       name="search" 
       value={search}
       onChange={handleChange}
       />
<button type="submit" onClick={callSearch}>Search</button>
</form> */}