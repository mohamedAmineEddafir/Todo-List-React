import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Function to persist data in local storage
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // Function to handle adding a new todo
  function handleAddTodos(newTodos) {
    const newTodoList = [...todos, newTodos];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Function to handle deleting a todo
  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Load todos from local storage when the component mounts
  useEffect(() => {
    let localItem = localStorage.getItem("todos");
    if (!localItem) {
      return;
    }
    localItem = JSON.parse(localItem).todos;
    setTodos(localItem);
  }, []);

  return (
    <div>
      <Header />
      <CreateArea
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      {todos.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            handleAddTodos={handleAddTodos}
            handleDeleteTodos={handleDeleteTodos} // Pass the correct prop name
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
