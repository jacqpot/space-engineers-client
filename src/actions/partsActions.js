export const fetchParts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/components")
      .then((resp) => resp.json())
      .then((parts) => dispatch({ type: "FETCH_PARTS", payload: parts }));
  };
};
