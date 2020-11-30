import { combineReducers } from "redux";

import { componentReducer } from "./componentReducer";
import { blockReducer } from "./blockReducer";

export const rootReducer = combineReducers({
  blocks: blockReducer,
  components: componentReducer,
});
