import React from "react";
import { AiFillSave } from "react-icons/ai";

const SaveButton = (props) => {
  return (
    <button onClick={props.save} type="button" name="save" className="text-2xl">
      <AiFillSave />
    </button>
  );
};

export default SaveButton;
