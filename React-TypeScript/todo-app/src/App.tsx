import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo } from "./components/Todo";

type Todo = {
  id: number;
  todo: string;
};

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddButton = () => {
    if (todo) {
      setTodos([...todos, { id: todos.length + 1, todo: todo }]);
    }
  };

  const handleDeleteButton = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <Input handleAddButton={handleAddButton} todo={todo} setTodo={setTodo} />
      {todos.map((todo) => (
        <Todo
          handleDeleteButton={handleDeleteButton}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default App;

//* const App : React.FC -> i can define App as Functional Component
/* const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
}; */

//? ------------------

/* 
When should I use React FC?

  If a component that doesn't need to render children.
It doesn't need to be typed as React. FC . 
Now that we know it implies the children prop by default, use FC only where it makes sense.
Not every component need to accommodate the children.
 */

//? ------------------

// const [todos, setTodos] = useState<string[]>([]); when you use string array
