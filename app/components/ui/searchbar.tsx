"use client"
import React, { useState } from 'react';

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <input
          type="text"
          className={`bg-white h-10 px-5 pr-10 rounded-full text-black text-sm focus:outline-none transition-all duration-300 ease-in-out ${
            isFocused ? 'w-64' : 'w-12'
          }`}
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (e.target.value === '') setIsFocused(false);
          }}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
