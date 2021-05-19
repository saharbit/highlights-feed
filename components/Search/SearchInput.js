import React from "react";
import SearchIcon from "../../icons/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/appState";

function SearchInput({ className }) {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.appState);

  return (
    <div
      className={`flex p-3 pr-6 items-center rounded-full bg-gray-200 ${
        className ? className : ""
      }`}
    >
      <SearchIcon className="w-5 h-5 mr-3" color="#9CA3AF" />
      <input
        className="outline-none bg-gray-200 w-full overflow-ellipsis"
        placeholder="Search Highlights"
        value={search}
        onChange={(e) => dispatch(setSearch({ search: e.target.value }))}
      />
    </div>
  );
}

export default SearchInput;
