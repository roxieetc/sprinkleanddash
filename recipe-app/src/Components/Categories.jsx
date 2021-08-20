//displays categories that are searchable
import React, { useState, useEffect } from 'react';


function Categories() {
  const [category, setCategory] = useState([])

  const fetchRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    const data = await response.json()
    console.log(data.meals)
    setCategory(data.meals)  
  }

  useEffect(() => {
    fetchRecipes()
  }, [])


  return (
    <section className="meals">
      {category.map((recipe) => {

        return (
          <div className="catContainer">
            <h3></h3>
          </div>
        )
      })}
      </section> 
 );
}


export default Categories;
