//Component that renders main page with random recipe generator
import React, { useState, useEffect } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Main = () => {
  const [randomMeal, setRandomMeal] = useState([])

  const fetchRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.meals)
    setRandomMeal(data.meals)  
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
     <section className="meals">
       <h1>Welcome!</h1>
       <p>Here's a random meal:</p>
       {randomMeal.map((recipe) => {
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


export default Main;