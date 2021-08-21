//Component that renders main page with random recipe generator
import React, { useState, useEffect } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Random = () => {
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

  const refresh = () => {
    window.location.reload(false);
  }

  return (
     <section className="meals">
       {randomMeal.map((recipe) => {
         const {idMeal, strMeal, strArea, strInstructions, strMealThumb} = recipe

         return (
           <article className="mealContainer" key={idMeal}>
             
             <h2>{strMeal}</h2>
             
             <h3>({strArea})</h3>
             
             <img src={strMealThumb} alt={strMeal} />
             
             <div className="instructions">
             <p>{strInstructions}</p>
             </div>
             
             <button className="newRandom" onClick={refresh}>New Meal</button>
           </article>
           
         )
         
       })}
       </section>
       
  );
}


export default Random;