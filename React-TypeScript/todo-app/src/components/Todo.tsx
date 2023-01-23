type Todo = {
  id: number;
  todo: string;
};

type TodoProps = {
  todo: Todo;
  handleDeleteButton: (id: number) => void;
};

export const Todo = ({ todo, handleDeleteButton }: TodoProps) => {
  return (
    <div>
      {todo.id + " - " + todo.todo}{" "}
      <button onClick={() => handleDeleteButton(todo.id)}>delete</button>
    </div>
  );
};
