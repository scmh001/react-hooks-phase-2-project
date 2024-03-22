import {useState, useEffect} from 'react';
import DrinkCard from '../components/DrinkCard';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [topSix, setTopSix] = useState([])
  
  useEffect(() => {
    const fetchTopSix = async () => {
      const response = await fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=5');
      const data = await response.json();
      setTopSix(data);
    };
  // TODO figure out how to pass state here and use dependency array to get buttons
    fetchTopSix();
  }, []);
  
  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-extrabold text-gradient bg-clip-text animate-bounce bg-gradient-to-r from-pink-500 to-yellow-500 shadow-xl">The Top Shelf</h1>
      {topSix.map(drink => {
        const ingredientsArray = drink.ingredients.split(', ');
        return (
        <div className="card" key={drink.id}>
        <NavLink to={`/drink/${drink.id}`}>
          <h2>{drink.name}</h2>
        </NavLink>
        <img src={drink.image} alt={drink.name} className="drink-image" />
        <p className='cheers'>{drink.cheers} Cheers!</p>
        <p className='category'>{drink.category}</p>
        <ul>
          {ingredientsArray.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          {/* <button className="del-btn" onClick={() => handleDeleteClick(toy)}>Donate to GoodWill</button> */}
        </ul>
      </div>)
        
        // <DrinkCard drink={drink} key={drink.id} />
      })}
    </>
  )
}
