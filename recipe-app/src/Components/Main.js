import React, { useState, useEffect } from 'react';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Main = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setRecipe(json);
    })
    .catch(console.error);
  }, []);

  return (
    <section className="container">
      {recipe.map((food) => {
        
        return (
          <div>
            <h2>{food.strMeal}</h2>
          </div>

        )
      })}
    </section>
  );
}


export default Main;
