import React from 'react'

export default function DrinkCard({drink, handleAddCheers}) {
const {name, image, cheers, ingredients, id} = drink

const handleCheers = () => {
    fetch(`http://localhost:4000/drinks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cheers: cheers + 1 
        })
    })
    .then(res => {
        if(res.ok){
            return (res.json())
        }else{
            return (console.error("Something went wrong..."))
        }
    })
    .then(updatedDrink => {
        handleAddCheers(updatedDrink);
    })

}

 return (
    <div className="card">
    <h2>{name}</h2>
    <img
      src={image}
      alt={name}
      className="drink-image"
    />
    <button className="like-btn" onClick={handleCheers}>{cheers} Cheers!</button>
    <button className="ingredients-btn">Show Ingredients</button>
        <p>{ingredients}</p>
    {/* <button className="del-btn" onClick={() => handleDeleteClick(toy)}>Donate to GoodWill</button> */}
  </div>
  )
}
