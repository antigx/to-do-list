import React from "react";
import FilterButton from "./buttons/FilterButton";
import { BiNotepad } from "react-icons/bi";

const SearchBar = (props) => {
  return (
    <div className="flex items-center justify-center bg-white shadow-xl">
      <div className="mx-5 text-3xl">
        <BiNotepad />
      </div>
      <div className="flex justify-between items-center w-1/2 max-w-md mx-auto bg-white rounded-lg ">
        {/*         <div className="w-full">
          <input
            type="search"
            className="w-full px-4 py-1 text-gray-800 rounded-lg"
            placeholder="Buscar notas"
            x-model="search"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex items-center justify-center w-12 h-12 text-black rounded-lg"
          >
            <BiSearchAlt />
          </button>
        </div> */}
      </div>

      <div className="flex justify-center items-center py-2 mr-5">
        <button
          className={`p-0 lg:mx-28 text-blue-500 ${
            props.filteredToDos ? "visible" : "invisible"
          }`}
          onClick={props.clearFilter}
        >
          <p className="">Limpar Filtro</p>
        </button>

        <FilterButton filter={props.filter} />
      </div>
    </div>
  );
};

export default SearchBar;
