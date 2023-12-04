// add imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos, useGetTodosQuery } from './todosSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const { data: todos, error, isLoading, isFetching } = useGetTodosQuery();
  const todoData = useSelector(selectAllTodos);
  console.log('todoData', todoData);

  console.log('data', todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo('');
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  /* if (isLoading) {
    content = <div className="loading">Loading...</div>;
  } else if (error) {
    content = <div className="error">{error}</div>;
  } else if (todos.length === 0) {
    content = <div className="empty">No todos</div>;
  } else {
    content = (
      <ul className="todos">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className="todo">{todo.title}</span>
            <button className="delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    );
  } */

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
