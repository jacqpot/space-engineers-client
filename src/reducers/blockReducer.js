export const blockReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BLOCKS":
      return action.payload;
    case "ADD_PART":
      return [...state, action.payload];
    default:
      return state;
  }
};
