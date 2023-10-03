import React, { useState } from "react";

const CardNoteBody = (props) => {
  const handleTextChange = (e) => {
    props.functions.updateFields({ text: e.currentTarget.value });
  };
  return (
    <div className="flex justify-between p-4 min-h-[10rem] h-full shadow-inner">
      {props.editing ? (
        <textarea
          className="w-full min-h-min outline-none resize-none bg-transparent"
          onChange={handleTextChange}
          value={props.text}
        />
      ) : (
        <p className="whitespace-normal break-words">{props.text}</p>
      )}
    </div>
  );
};

export default CardNoteBody;
