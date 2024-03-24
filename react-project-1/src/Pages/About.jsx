import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-5 text-center">
      <h1 className="text-4xl font-bold underline mb-4 text-indigo-600" style={{ marginLeft: '-150px' }}>About Drinks Galore</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold">Drinks Galore</span>, the ultimate destination for beverage enthusiasts looking to explore, discover, and celebrate a wide array of drinks. 
        Our platform showcases the top 5 upvoted drinks on the home page, allows users to "cheers" or upvote their favorites, and offers a Drink Input Form for sharing personal concoctions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Additionally, we feature a Water Volume Intake Tracker for hydration monitoring and a "Show Ingredients" button for a deeper dive into what makes up each beverage. 
        With the ability to filter drinks by popularity, Drinks Galore serves as a dynamic and interactive glossary for discovering new favorites and engaging with a community of like-minded drink lovers.
      </p>
    </div>
  )
}