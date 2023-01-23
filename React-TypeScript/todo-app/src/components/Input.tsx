type InputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddButton: () => void;
};

const Input = ({ todo, setTodo, handleAddButton }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="yazınız . . . "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddButton}>Ekle</button>
    </div>
  );
};

export default Input;

/* 
//* if we define : React.FC, we need to do like; (dont use React.FC everywhere component, use when you need children of component)
const Input: React.FC<InputProps> = ({ todo, setTodo }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="yazınız . . . "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Ekle</button>
    </div>
  );
}; */
