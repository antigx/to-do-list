import React, { useState } from "react";
import NewNote from "./NewNote";
import CardNote from "./CardNote";
import SearchBar from "./SearchBar";

const ToDoList = () => {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "Meeting lkjhkjkjlkjhlkjh witjjjjjjjjjjjjjjjjjjjjh Client",
      text: "Discuss project requirements and deadlines.",
      color: "#FFFFFF",
      favorite: false,
      createdAt: new Date("2023-09-29T10:00:00"),
    },
    {
      id: 2,
      title: "Buy Groceries",
      text: "Milk, eggs, vegetables, and fruits.",
      color: "#FFFFFF",
      favorite: true,
      createdAt: new Date("2023-09-30T14:30:00"),
    },
    {
      id: 3,
      title: "Study React Hooks",
      text: "Work on practical examples and exercises.",
      color: "#FFFFFF",
      favorite: false,
      createdAt: new Date("2023-09-28T16:45:00"),
    },
    {
      id: 4,
      title: "Gym Workout",
      text: "Cardio and weightlifting session.",
      color: "#FFFFFF",
      favorite: true,
      createdAt: new Date("2023-09-27T08:15:00"),
    },
    {
      id: 5,
      title: "Read Book",
      text: "Start reading 'The Great Gatsby'.",
      color: "#FFFFFF",
      favorite: false,
      createdAt: new Date("2023-09-26T20:00:00"),
    },
    {
      id: 6,
      title: "Coding Practice",
      text: "Work on algorithms and data structures.",
      color: "#FFFFFF",
      favorite: true,
      createdAt: new Date("2023-09-25T13:00:00"),
    },
    {
      id: 7,
      title: "Family Dinner",
      text: "Cook a special dinner for the family.",
      color: "#FFFFFF",
      favorite: false,
      createdAt: new Date("2023-09-24T18:30:00"),
    },
    {
      id: 8,
      title: "Plan Weekend Trip",
      text: "Research destinations and book accommodations.",
      color: "#FFFFFF",
      favorite: true,
      createdAt: new Date("2023-09-23T11:45:00"),
    },
  ]);
  const [filteredToDos, setFilteredToDos] = useState(null);
  const [filteredColor, setFilteredColor] = useState(null); // Define filteredColor state

  const addToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
    if (filteredToDos && newToDo.color === filteredColor) {
      setFilteredToDos([...filteredToDos, newToDo]);
    }
  };

  const deleteToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
    if (filteredToDos) {
      setFilteredToDos((prevFilteredToDos) =>
        prevFilteredToDos.filter((toDo) => toDo.id !== id)
      );
    }
  };

  const editToDo = (id, updatedToDo) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, ...updatedToDo } : toDo
      )
    );
    if (filteredToDos) {
      setFilteredToDos((prevFilteredToDos) =>
        prevFilteredToDos.map((toDo) =>
          toDo.id === id ? { ...toDo, ...updatedToDo } : toDo
        )
      );
    }
  };

  const toggleFavorite = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, favorite: !toDo.favorite } : toDo
      )
    );
    if (filteredToDos) {
      setFilteredToDos((prevFilteredToDos) =>
        prevFilteredToDos.map((toDo) =>
          toDo.id === id ? { ...toDo, favorite: !toDo.favorite } : toDo
        )
      );
    }
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

  const todosToDisplay = filteredToDos ? filteredToDos : toDos;

  const changeBgColor = (id, color) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, color: color } : toDo
      )
    );
    if (filteredToDos) {
      setFilteredToDos((prevFilteredToDos) =>
        prevFilteredToDos.map((toDo) =>
          toDo.id === id ? { ...toDo, color: color } : toDo
        )
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100	">
      <SearchBar
        filter={filterByColor}
        clearFilter={clearFilter}
        filteredToDos={filteredToDos}
      />

      <div className="main-container box-border pb-8 flex flex-col bg-gray-100 min-h-full h-full">
        <NewNote addToDo={addToDo} />
        <p className="py-4 mx-8 lg:mx-28 font-medium">Favoritas</p>
        <div
          id="favorite-note-container"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mx-8 lg:mx-28 "
        >
          {todosToDisplay
            .filter((todo) => !filteredColor || todo.color === filteredColor)
            .filter((toDo) => toDo.favorite === true)
            .map((toDo) => (
              <CardNote
                toDo={toDo}
                key={toDo.id}
                functions={{
                  toggleFavorite,
                  deleteToDo,
                  editToDo,
                  changeBgColor,
                }}
              />
            ))}
        </div>
        <p className="py-4 mx-8 lg:mx-28 font-medium">Outras</p>
        <div
          id="normal-note-container"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mx-8 lg:mx-28 "
        >
          {todosToDisplay
            .filter((todo) => !filteredColor || todo.color === filteredColor)
            .filter((toDo) => toDo.favorite === false)
            .map((toDo) => (
              <CardNote
                toDo={toDo}
                key={toDo.id}
                functions={{
                  toggleFavorite,
                  deleteToDo,
                  editToDo,
                  changeBgColor,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
