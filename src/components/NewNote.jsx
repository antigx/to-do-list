import React, { useState } from "react";
import FavoriteButton from "./buttons/FavoriteButton";
import SaveButton from "./buttons/SaveButton";
import CancelButton from "./buttons/CancelButton";

const initialState = {
  title: "",
  text: "",
  color: "#FFFFFF",
  favorite: false,
};

const NewNote = (props) => {
  const [fields, setFields] = useState(initialState);
  const [isTextAreaChanged, setIsTextAreaChanged] = useState(false);

  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    if (!isTextAreaChanged) setIsTextAreaChanged(true);
  };

  const handleSubmit = (event) => {
    props.addToDo(fields);
    initialState.id++;
    event.preventDefault();
    setFields(initialState);
    setIsTextAreaChanged(!isTextAreaChanged);
  };

  return (
    <div className="mx-auto my-4 border-2 w-1/2 bg-white rounded-lg">
      <div className="flex justify-between p-2">
        <label htmlFor="ftitle" className="w-full font-medium">
          <input
            id="ftitle"
            type="text"
            name="title"
            className="w-full font-medium"
            placeholder="Título"
            value={fields.title}
            onChange={handleFieldsChange}
          />
        </label>

        <FavoriteButton
          favorite={fields.favorite}
          toggleFavorite={() =>
            setFields({ ...fields, favorite: !fields.favorite })
          }
        />
      </div>
      <hr />
      <div className="flex justify-between p-4 h-full shadow-inner">
        <label
          htmlFor="ftext"
          className="w-full min-h-min outline-none resize-none bg-transparent"
        >
          <textarea
            id="ftext"
            name="text"
            placeholder="Descrição"
            onChange={handleFieldsChange}
            className="w-full min-h-min outline-none resize-none bg-transparent"
            value={fields.text}
          ></textarea>
        </label>
      </div>

      {isTextAreaChanged && (
        <div className="flex justify-between px-4 py-2">
          <SaveButton save={handleSubmit} />{" "}
          <CancelButton
            cancel={() => {
              setFields(initialState);
              setIsTextAreaChanged(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NewNote;
