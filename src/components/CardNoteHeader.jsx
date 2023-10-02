import React, { Fragment, useState } from "react";
import FavoriteButton from "./buttons/FavoriteButton";

const CardNoteHeader = (props) => {
  const handleTitleChange = (e) => {
    props.functions.updateFields({ title: e.currentTarget.value });
  };
  return (
    <Fragment>
      <div className="flex justify-between p-2 ">
        {props.editing ? (
          <input
            className="block w-full rounded-md transition duration-300 resize-none outline-none font-medium  bg-transparent "
            onChange={handleTitleChange}
            value={props.title}
          />
        ) : (
          <p className="w-full font-medium">{props.title}</p>
        )}
        <FavoriteButton
          favorite={props.favorite}
          toggleFavorite={props.functions.toggleFavorite}
        />
      </div>
      <hr />
    </Fragment>
  );
};

export default CardNoteHeader;
