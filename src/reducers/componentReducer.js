export const componentReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMPONENTS":
      return action.payload;
  }
};
