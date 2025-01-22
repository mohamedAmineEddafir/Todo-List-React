import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputForm, setInputForm] = useState(false);
  const [todos, setTodos] = useState({
    title: "",
    content: "",
  });

  function WriteTodoTasks(event) {
    const { value, name } = event.target;

    setTodos((privios) => {
      return {
        ...privios,
        [name]: value,
      };
    });
  }

  function SubmiteData(event) {
    props.handleAddTodos(todos);
    setTodos({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function OverOut() {
    setInputForm(true);
  }

  return (
    <div>
      <form className="create-note">
        {inputForm && (
          <input
            name="title"
            value={todos.title}
            onChange={WriteTodoTasks}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          value={todos.content}
          onChange={WriteTodoTasks}
          placeholder="Take a note..."
          onClick={OverOut}
          rows={inputForm ? "3" : "1"}
        />
        <Zoom in={inputForm}>
          <Fab onClick={SubmiteData}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
