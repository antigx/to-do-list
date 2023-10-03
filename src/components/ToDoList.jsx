import React, { useEffect, useState } from "react";
import NewNote from "./NewNote";
import CardNote from "./CardNote";
import SearchBar from "./SearchBar";
import SectionToDoList from "./SectionToDoList";

const API = "http://localhost:5000/todo/";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState(null);
  const [filteredColor, setFilteredColor] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filteredColor) filterByColor(filteredColor);
  }, [toDos]);

  /* api requests */
  const apiRequest = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const getData = async () => {
    const data = await apiRequest(API);
    setToDos(data);
  };

  const addToDo = async (newToDo) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    };

    const data = await apiRequest(API, options);
    setToDos(data);
  };

  const deleteToDo = async (id) => {
    await apiRequest(API + id, {
      method: "DELETE",
    });
    getData();
  };

  const updateToDo = async (id, updatedProperties) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperties),
    };

    const data = await apiRequest(API + id, options);
    setToDos(data);
  };

  const filterByColor = (color) => {
    const filteredTodos = toDos.filter((toDo) => toDo.color === color);
    setFilteredToDos(filteredTodos);
    setFilteredColor(color);
  };

  const clearFilter = () => {
    setFilteredToDos(null);
    setFilteredColor(null);
  };

  const filterAndMapToDos = (isFavorite) =>
    todosToDisplay
      .filter((todo) => !filteredColor || todo.color === filteredColor)
      .filter((toDo) => toDo.favorite === isFavorite)
      .map((toDo) => (
        <CardNote
          toDo={toDo}
          key={toDo.id}
          functions={{
            deleteToDo,
            updateToDo,
          }}
        />
      ));

  const todosToDisplay = filteredToDos || toDos;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <SearchBar
        filter={filterByColor}
        clearFilter={clearFilter}
        filteredToDos={filteredToDos}
      />

      <div className="box-border pb-8 flex flex-col bg-gray-100 min-h-full h-full">
        <NewNote addToDo={addToDo} />

        <SectionToDoList title="Favoritas">
          {filterAndMapToDos(true)}
        </SectionToDoList>

        <SectionToDoList title="Outras">
          {filterAndMapToDos(false)}
        </SectionToDoList>
      </div>
    </div>
  );
};

export default ToDoList;
