import { useReducer } from "react";

const actions = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case actions.DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
};

export default function Counter({ start = 10 }) {
  const [state, dispatch] = useReducer(reducer, { counter: start });

  const handleChange = (type) => {
    const action = {
      type
    };
    dispatch(action);
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>{state.counter}</h3>
      <button onClick={() => handleChange(actions.INCREMENT_COUNTER)}>
        Add
      </button>
      <button onClick={() => handleChange(actions.DECREMENT_COUNTER)}>
        Reduce
      </button>
    </>
  );
}
