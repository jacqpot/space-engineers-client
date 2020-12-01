import React from "react";

const Block = ({ block }) => {
  return (
    <div>
      <h3>{block.name}</h3>

      <p>{block.size}</p>
    </div>
  );
};

export default Block;
