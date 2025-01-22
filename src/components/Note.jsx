import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

function Note(props) {
  function handleData() {
    props.handleDeleteTodos(props.id); // Use the correct prop name
  }

  return (
    <div className="note">
      <h1 className="titleNotes">{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleData}>
        <DeleteForeverRoundedIcon />
      </button>
    </div>
  );
}

export default Note;
