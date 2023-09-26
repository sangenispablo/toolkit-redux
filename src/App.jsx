import { useDispatch, useSelector } from "react-redux";

import {
  incrementar,
  decrementar,
  incrementarPorValor,
} from "./store/slices/counter";

import "./App.css";

const value = 2;

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Vite + React + React Redux Toolkit</h2>
      <h2>Counter: {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(incrementar())}>+</button>
        <button onClick={() => dispatch(incrementarPorValor(value))}>
          by {value}
        </button>
        <button onClick={() => dispatch(decrementar())}>-</button>
      </div>
    </>
  );
}

export default App;
