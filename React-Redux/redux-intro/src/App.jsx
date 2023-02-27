import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementMore } from "./redux/counter/counter";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(incrementMore(10))}>Increase more</button>
      <span>{value}</span>
    </div>
  );
}

export default App;
