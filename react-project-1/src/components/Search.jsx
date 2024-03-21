import React from 'react'

export default function Search({search, handleSearch}) {
  return (
    <div className="searchbar">
    <label htmlFor="search">Search Drinks:</label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      value={search}
      onChange={handleSearch}
      />
      </div>
  )
}
