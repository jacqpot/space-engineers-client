export const blockReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BLOCKS":
      return action.payload;
    default:
      return state;
  }
};
