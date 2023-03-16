import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./App.css";
import {
    decrement,
    decrementByAmount,
    increment,
    incrementByAmount,
    incrementMore,
} from "./redux/counter/counterSlice";

function App() {
    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);
    const {value} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
            div
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <div>
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
                >
                    Increase by amount
                </button>
            </div>
            <div>
                <input
                    type="text"
                    value={decrementAmount}
                    onChange={(e) => setDecrementAmount(e.target.value)}
                />
                <button
                    onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}
                >
                    Decrease by amount
                </button>
            </div>
            <h1>{value}</h1>
        </div>
    );
}

export default App;
