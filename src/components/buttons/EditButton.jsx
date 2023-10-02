import React from "react";
import { Fragment } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const EditButton = ({ editCard }) => {
  return (
    <Fragment>
      <button className="text-2xl" onClick={editCard} type="button" name="edit">
        <AiOutlineEdit />
      </button>
    </Fragment>
  );
};

export default EditButton;
