import { Todo } from "../Todo";

export const ViewTodo = (props) => {
  
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>View Todo</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.todos.map((p) => (
        <Todo title={p.title} body={p.body} />
      ))}
    </div>
  );
};
