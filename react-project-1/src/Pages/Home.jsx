import {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'

export default function Home() {
  const [topSix, setTopSix] = useState([])
  
  useEffect(() => {
    const fetchTopSix = async () => {
      const response = await fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=6');
      const data = await response.json();
      setTopSix(data);
    };
  
    fetchTopSix();
    const interval = setInterval(fetchTopSix, 1000); // Fetch every 1 second (1000ms)
  
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  console.log(topSix)
  return (
    <>
      <h2></h2>
      {topSix.map(drink => {
        return <DrinkCard drink={drink} key={drink.id} />
      })}
    </>
  )
}
