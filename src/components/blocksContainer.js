import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlocks } from "../actions/blockActions";

import BlockList from "./BlockList";
class blocksContainer extends Component {
  componentDidMount() {
    this.props.fetchBlocks();
  }
  render() {
    return (
      <div>
        <BlockList />
      </div>
    );
  }
}

export default connect(null, { fetchBlocks })(blocksContainer);
