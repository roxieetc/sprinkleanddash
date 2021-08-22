//displays categories that are searchable
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
    <div><h1>Pick A Category:</h1>
    <section className="categories">
      
     {images.map((recipe) => {
         const {idCategory, strCategory, strCategoryThumb} = recipe

         return (
           <article className="catContainer" key={idCategory}>
             <Link to={'/categories/' + strCategory}><h2>{strCategory}</h2>
             <img src={strCategoryThumb} alt={strCategory} /></Link>
           </article>
         )
       })}
      </section> 
      </div>
 );
}


export default Categories;
