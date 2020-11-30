export const componentReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PARTS":
      return action.payload;
    default:
      return state;
  }
};
