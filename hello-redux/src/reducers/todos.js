const initialState = {
  data: []
};

// Reducers listens to the type of actions that happen
// so that we can update the state accordigly.

// In Redux, we do not mutate the current state, we only copy
// the state and change what we want to and return a
// new state.
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, { id: Math.random, text: action.text }]
      };
    case "DELETE_TODO":
      return {};
    default:
      return state;
  }
};

export default todos;
