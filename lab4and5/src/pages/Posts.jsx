import { ViewTodo } from "../components/ViewTodo";
import { AddTodo } from "../components/AddTodo";
import { useState } from "react";

export const Posts = (props) => {
  const [todos, setTodos] = useState([]);
  const handleDelete = () => {
    setTodos([]);
  };
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <>
    
    <h1>Todo List</h1>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddTodo addTodo={addTodo} />
        </div>
        <div className="col-6">
          <ViewTodo todos={todos} onDelete={handleDelete} />
        </div>
      </div>
    </div>
    </>
    
  );
};
