//displays the results from the search function
import React, { useState, useEffect } from 'react';

const ingredientsURL = "www.themealdb.com/api/json/v1/1/list.php?i=list"

function Recipes({ images }) {

  const [searchMeal, setSearchMeal] = useState([])

  const fetchMeals = async () => {
    const response = await fetch(ingredientsURL)
    const data = await response.json()
    console.log(data.meals)
    setSearchMeal(data.meals)  
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  return (
    <section className="meals">
       <h1>Your Meal</h1>
       {searchMeal.map((recipe) => {
         const {idMeal, strMeal, strInstructions, strMealThumb} = recipe

         return (
           <article key={idMeal}>
             <h2>{strMeal}</h2>
             <img src={strMealThumb} alt={strMeal} />
             <p>{strInstructions}</p>
           </article>
         )
       })}
       </section> 
  );
}

export default Recipes;
