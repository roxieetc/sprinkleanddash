//displays categories that are searchable
import React, { useState, useEffect } from 'react';


function Categories() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await response.json()
    console.log(data.categories)
    setImages(data.categories)
  }


  return (
    <section className="categories">
     {images.map((recipe) => {
         const {idCategory, strCategory, strCategoryThumb} = recipe

         return (
           <article className="catContainer" key={idCategory}>
             <h2>{strCategory}</h2>
             <img src={strCategoryThumb} alt={strCategory} />
           </article>
         )
       })}
      </section> 
 );
}


export default Categories;
