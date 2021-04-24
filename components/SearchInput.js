import React from "react";
import SearchIcon from "./SearchIcon";

function SearchInput({ search, setSearch, className }) {
  return (
    <div
      className={`flex w-full p-3 pr-6 rounded-3xl bg-gray-200 ${
        className ? className : ""
      }`}
    >
      <SearchIcon className="w-5 mr-3" color="#9CA3AF" />
      <input
        className="outline-none bg-gray-200 w-full"
        placeholder="Search Highlights"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
