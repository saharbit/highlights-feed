import React from "react";
import SearchIcon from "../../icons/SearchIcon";

function SearchInput({ search, setSearch, className }) {
  return (
    <div
      className={`flex p-3 pr-6 items-center rounded-3xl bg-gray-200 ${
        className ? className : ""
      }`}
    >
      <SearchIcon className="w-5 h-5 mr-3" color="#9CA3AF" />
      <input
        className="outline-none bg-gray-200 w-full overflow-ellipsis"
        placeholder="Search Highlights"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
