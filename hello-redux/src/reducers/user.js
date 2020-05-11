const initialState = {
  username: "Rahul",
  location: "India"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {};
    default:
      return state;
  }
};

export default user;
