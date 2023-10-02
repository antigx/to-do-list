import React from "react";
import { FcCancel } from "react-icons/fc";

const CancelButton = (props) => {
  return (
    <button
      className="text-2xl"
      onClick={props.cancel}
      type="button"
      name="delete"
    >
      <FcCancel />
    </button>
  );
};

export default CancelButton;
