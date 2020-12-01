import React, { Component } from "react";
import { connect } from "react-redux";
import Block from "./Block";
class BlockList extends Component {
  render() {
    let blocks = this.props.blocks.map((block, i) => (
      <Block key={i} block={block} />
    ));

    return (
      <div>
        <ul>{blocks}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  };
};

export default connect(mapStateToProps)(BlockList);
