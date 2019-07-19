import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.my_counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Counter = {counter}</h1>

      <h1>IsLogged = {isLogged}</h1>
      {isLogged ? <h3>"You are logged in"</h3>:<h3>"Do NOT try. You are NOT logged in."</h3>}
    </div>
  );
}

export default App;
