import React, {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'

export default function Home() {
  const [topSix, setTopSix] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=6')
    .then (res => {
      if(res.ok){
        return (res.json())
      }else {
        return (console.error("Oops! Something went wrong..."))
      }
    })
    .then(topSixData => setTopSix(topSixData))
  }, [])

  console.log(topSix)
  return (
    <>
      <h2>Home</h2>
      {topSix.map(drink => {
        return <DrinkCard drink={drink} />
      })}
    </>
  )
}
