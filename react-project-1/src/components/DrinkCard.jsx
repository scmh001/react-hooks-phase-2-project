import React from 'react'

export default function DrinkCard({drink}) {
  const {name, image, ingredients, cheers} = drink
  
 return (
    <div className="card">
    <h2>{name}</h2>
    <img
      src={image}
      alt={name}
      className="drink-image"
    />
    <p>{cheers} Cheers </p>
    <button className="like-btn">Cheers!</button>
    <button className="ingredients-btn">Show Ingredients</button>
        <p>{ingredients}</p>
    {/* <button className="del-btn" onClick={() => handleDeleteClick(toy)}>Donate to GoodWill</button> */}
  </div>
  )
}
