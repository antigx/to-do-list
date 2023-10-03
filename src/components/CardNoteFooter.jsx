import React, { Fragment } from "react";
import ColorPickerButton from "./buttons/ColorPickerButton";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";
import SaveButton from "./buttons/SaveButton";
import CancelButton from "./buttons/CancelButton";

const CardNoteFooter = (props) => {
  const selectElementById = (id) => document.getElementById(id);
  return (
    <Fragment>
      <hr />
      <div id="footer" className="flex justify-between m-2 ">
        {props.editing ? (
          <>
            <SaveButton save={props.functions.saveCardEditing} />
            <CancelButton cancel={props.functions.cancelCardEditing} />
          </>
        ) : (
          <>
            <EditButton editCard={props.functions.startEditingCard} />
            <ColorPickerButton
              functions={{
                updateToDo: props.functions.updateToDo,
                selectElementById,
              }}
              id={props.id}
            />
            <DeleteButton
              deleteToDo={() => props.functions.deleteToDo(props.id)}
            />{" "}
          </>
        )}
      </div>
    </Fragment>
  );
};

export default CardNoteFooter;
