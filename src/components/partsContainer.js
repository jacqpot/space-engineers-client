import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchParts } from "../actions/partsActions";
import PartsForm from "./PartsForm";
import PartsList from "./PartsList";

class PartsContainer extends Component {
  componentDidMount() {
    this.props.fetchParts();
  }

  render() {
    return (
      <div>
        <PartsList />
        <PartsForm />
      </div>
    );
  }
}

export default connect(null, { fetchParts })(PartsContainer);
