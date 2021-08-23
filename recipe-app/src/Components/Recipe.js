import React, { useState, useEffect } from 'react';

const Recipe = ({ match }) => {

const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${match.params.meals}`)
    const data = await response.json()
    console.log(data.meals)
    setImages(data.meals)
  }

    return (
        <div>
            <section className="recipeMeals">
      
      {images.map((recipe) => {
          const {strMeal, strMealThumb, strInstructions, strArea} = recipe
 
          return (
            <article className="recipeContainer" key={strMeal}>
              <h2>{strMeal}</h2>
              <h3>({strArea})</h3>
              <img src={strMealThumb} alt={strMeal} />
              <p>{strInstructions}</p>
            </article>
          )
        })}
       </section>
        </div>

    )
}

export default Recipe;