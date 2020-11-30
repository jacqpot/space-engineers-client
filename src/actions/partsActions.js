export const fetchParts = () => {
  return (despatch) => {
    fetch("http://localhost:3000/components")
      .then((resp) => resp.json())
      .then((parts) => console.log("fetchParts", parts));
  };
};
