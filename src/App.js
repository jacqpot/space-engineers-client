import React from "react";
import PartsContainer from "./components/Parts/partsContainer";
import BlocksContainer from "./components/Blocks/blocksContainer";
const App = () => {
  return (
    <div>
      <BlocksContainer />
      <PartsContainer />
    </div>
  );
};

export default App;
