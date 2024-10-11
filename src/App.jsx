import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count :- {count}</div>
      <button
        onClick={() => dispatch('increment')}
        style={{
          border: '2px solid black',
          padding: '10px',
          backgroundColor: 'lightblue',
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch('decrement')}
        style={{
          border: '2px solid black',
          padding: '10px',
          backgroundColor: 'lightblue',
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch('reset')}
        style={{
          border: '2px solid black',
          padding: '10px',
          backgroundColor: 'lightblue',
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
