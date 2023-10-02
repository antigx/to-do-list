import React, { useState } from "react";
import CardNoteHeader from "./CardNoteHeader";
import CardNoteFooter from "./CardNoteFooter";
import CardNoteBody from "./CardNoteBody";

const CardNote = ({ toDo, functions }) => {
  const [editing, setEditing] = useState(false);
  const [updatedFields, setUpdatedFields] = useState(toDo);

  const editCard = (editedFields) => {
    setEditing(!editing);
    functions.editToDo(editedFields.id, editedFields);
  };

  const updateFields = (fieldsToUpdate) => {
    setUpdatedFields({ ...updatedFields, ...fieldsToUpdate });
    console.log(updatedFields, fieldsToUpdate);
  };

  return (
    <div
      className="transition ease-in duration-200 flex flex-col justify-between w-full border rounded-lg shadow-lg"
      style={{ backgroundColor: toDo.color }}
    >
      <CardNoteHeader
        title={updatedFields.title}
        favorite={updatedFields.favorite}
        editing={editing}
        functions={{
          updateFields,
          toggleFavorite: () => functions.toggleFavorite(toDo.id),
        }}
      />
      <CardNoteBody
        text={updatedFields.text}
        editing={editing}
        functions={{ updateFields }}
      />
      <CardNoteFooter
        functions={{
          ...functions,
          saveCardEditing: () => editCard(updatedFields),
          cancelCardEditing: () => {
            setUpdatedFields(toDo);
            setEditing(false);
          },
          startEditingCard: () => setEditing(!editing),
        }}
        editing={editing}
        id={toDo.id}
      />
    </div>
  );
};

export default CardNote;
