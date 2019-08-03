import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './actions';

// RL New Redux Hooks 2019 June. 
// useSelector takes place of mapStateToProps
// useDispatch takes place of mapDispatchToProps
function App() {
  const counter = useSelector(state => state.my_counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      <h1>IsLogged = {isLogged}</h1>
      {isLogged ? <h3>"You are logged in"</h3>:<h3>"Do NOT try. You are NOT logged in."</h3>}
    </div>
  );
}

export default App;
