import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FavoriteButton = (props) => {
  return (
    <button
      type="button"
      className="mx-2 text-2xl"
      name="favorite"
      onClick={props.toggleFavorite}
    >
      {props.favorite ? <AiFillStar /> : <AiOutlineStar />}
    </button>
  );
};

export default FavoriteButton;
