import React from 'react'

export default function Search({ search, handleSearch }) {
  return (
    <div className="flex flex-col items-center my-8">
      <label htmlFor="search" className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
        Search Drinks:
      </label>
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type a name to search..."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
