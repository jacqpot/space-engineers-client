export const fetchBlocks = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/blocks")
      .then((resp) => resp.json())
      .then((blocks) => dispatch({ type: "FETCH_BLOCKS", payload: blocks }));
  };
};

export const addBlock = (block) => {
  return (dispatch) => {
    fetch("http://localhost:3000/blocks", {
      method: "POST",
      body: JSON.stringify(block),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((block) => dispatch({ type: "ADD_BLOCK", payload: block }));
  };
};
