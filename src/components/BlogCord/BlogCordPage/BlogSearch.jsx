


import React, { useState } from 'react';

function BlogSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search blogs."
        value={searchTerm}
        onChange={handleSearch}
        className="w-80 px-4 py-2 border border-gray-300 rounded-xl"
      />
    </div>
  );
}

export default BlogSearch;

