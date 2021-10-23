import { useState, useEffect } from "react";
import { ViewTodo } from "./components/ViewTodo";
import { AddTodo } from "./components/AddTodo"
export const App = () => {
  const [todos, setTodos] = useState([]);
  const handleDelete=()=>{
    setTodos([]);
  }
  const addTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddTodo addTodo={addTodo}/>
        </div>
        <div className="col-6">
          <ViewTodo todos={todos} onDelete={handleDelete}/>

        </div>

      </div>

    </div>
  );
};
