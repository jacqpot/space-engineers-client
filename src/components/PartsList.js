import React, { Component } from "react";
import { connect } from "react-redux";
class PartsList extends Component {
  render() {
    let parts = this.state.parts.map((part, index) => (
      <li key={index}>{part.name}</li>
    ));

    return (
      <div>
        <ul>{parts}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parts: state.components,
  };
};

export default connect(mapStateToProps)(PartsList);
