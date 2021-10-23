import { Input } from "../Input";
import { useState } from "react";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("Please enter todo title");
  const [body, setBody] = useState("Please enter todo body");
  const handleSubmit = () => {
    props.addTodo({ title, body });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Todo</h1>
      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Todo
      </button>
    </div>
  );
};
