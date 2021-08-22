import React, { useState, useEffect } from 'react';


const CategoryMeals = ({ match }) => {

    const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.meals}`)
    const data = await response.json()
    console.log(data.meals)
    setImages(data.meals)
  }

    return (

        <section className="catMeals">
      
      {images.map((recipe) => {
          const {strMeal, strMealThumb} = recipe
 
          return (
            <article className="catMealContainer" key={strMeal}>
              <h2>{strMeal}</h2>
              <img src={strMealThumb} alt={strMeal} />
            </article>
          )
        })}
       </section>
     );
    }

export default CategoryMeals;