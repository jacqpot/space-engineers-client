export const componentReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PARTS":
      return action.payload;
    case "ADD_PART":
      return [...state, action.payload];
    default:
      return state;
  }
};
