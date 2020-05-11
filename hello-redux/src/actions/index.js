// Actions: We need actions when somthing
// happens in our app so we can go ahead and
// allow our reducers to update the state.

// Actions usually consist of a function that
// contains mainly a type and a payload.

// Syncronus actions:
const ADD_TODO = "ADD_TODO";
const addTodo = text => ({
  type: ADD_TODO,
  text
});

const DELETE_TODO = "DELETE_TODO";
const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});
