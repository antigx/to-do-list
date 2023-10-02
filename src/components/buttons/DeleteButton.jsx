import React, { Fragment } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteButton = (props) => {
  return (
    <Fragment>
      <button
        className="text-2xl"
        onClick={props.deleteToDo}
        type="button"
        name="delete"
      >
        <RiDeleteBinLine />
      </button>
    </Fragment>
  );
};

export default DeleteButton;
