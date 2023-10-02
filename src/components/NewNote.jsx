import React, { useState } from "react";
import FavoriteButton from "./buttons/FavoriteButton";
import SaveButton from "./buttons/SaveButton";
import CancelButton from "./buttons/CancelButton";

const initialState = {
  id: 9,
  title: "Título",
  text: "",
  color: "#FFFFFF",
  favorite: false,
  createdAt: new Date(),
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
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          className="w-full font-medium"
          value={fields.title}
          onChange={handleFieldsChange}
        />

        <FavoriteButton
          favorite={fields.favorite}
          toggleFavorite={() =>
            setFields({ ...fields, favorite: !fields.favorite })
          }
        />
      </div>
      <hr />
      <div className="flex justify-between p-4 h-fit shadow-inner">
        <textarea
          name="text"
          onInput={handleFieldsChange}
          className="w-full min-h-[4rem] outline-none resize-none bg-transparent"
          value={fields.text}
        ></textarea>
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
