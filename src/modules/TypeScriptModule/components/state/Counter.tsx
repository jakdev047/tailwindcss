import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state:any, action:any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <>
        Count: {state.count}
        <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
        onClick={()=> dispatch({type: "increment", payload: 10})}
      >
        Increment 10
      </button>
      <button
        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
        onClick={()=> dispatch({type: "decrement", payload: 10})}
      >Decrement 10</button>
      </>
  );
};
