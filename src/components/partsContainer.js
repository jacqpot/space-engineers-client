import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchParts } from "../actions/partsActions";

class PartsContainer extends Component {
  componentDidMount() {
    this.props.fetchParts();
  }

  render() {
    return <div>hello world</div>;
  }
}

export default connect(null, { fetchParts })(PartsContainer);
