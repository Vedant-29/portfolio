import React from 'react'

function SearchBar() {
  return (
    <div className="relative">
        <input
        type="text"
        placeholder="Search..."
        className="py-2 pl-10 pr-4 rounded-lg h-10 w-96 outline-none"
        />
        <button
        type="submit"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        </button>
    </div>
  )
}

export default SearchBar