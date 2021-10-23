import { Todo } from "./components/Todo";
export const App = () => {
  const todos = [
    { title: "WakeUp", body: "huryy up!!" },
    { title: "Brush ur teeth", body: "a8sel senank" },
    { title: "Break fast", body: "healthy breackfast" },
    { title: "Drink Coffee", body: "american coffee" },
    { title: "WakeUp", body: "huryy up!!" },
    { title: "Brush ur teeth", body: "a8sel senank" },
    { title: "Break fast", body: "healthy breackfast" },
    { title: "Drink Coffee", body: "american coffee" },
  ];
  return (
    <div>
       <h1>el routine al youmy :(</h1>

         {todos.map((todo) => (
        <Todo title={todo.title} body={todo.body} />
           ))}

    </div>
    
     
     );
};
