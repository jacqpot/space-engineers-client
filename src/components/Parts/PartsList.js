import React, { Component } from "react";
import { connect } from "react-redux";
import Part from "./Part";
class PartsList extends Component {
  render() {
    let parts = this.props.parts.map((part, i) => <Part key={i} part={part} />);

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
