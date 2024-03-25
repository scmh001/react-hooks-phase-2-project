import React from 'react'

export default function About() {
  return (
    <div className="p-5 text-center max-w-5xl content-center m-auto">
      <h1 className="text-4xl font-bold underline mb-4 text-indigo-600">About Drinks Galore</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold">Drinks Galore</span>, the ultimate destination for beverage enthusiasts looking to explore, discover, and celebrate a wide array of drinks. 
        Our platform showcases the top 5 upvoted drinks on the home page, allows users to "cheers" or upvote their favorites, and offers a Drink Input Form for sharing personal concoctions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Additionally, we feature a Water Volume Intake Tracker for hydration monitoring and a "Show Ingredients" button for a deeper dive into what makes up each beverage. 
        With the ability to filter drinks by popularity, Drinks Galore serves as a dynamic and interactive glossary for discovering new favorites and engaging with a community of like-minded drink lovers.
      </p>
      <br></br>
      <div>
        <img src='https://c.pxhere.com/photos/3a/88/neon_neon_font_advertisement_advertising_night_light_happy_hour_green-1348764.jpg!d'></img>
      </div>
    </div>
  )
}