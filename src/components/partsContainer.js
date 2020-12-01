import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchParts } from "../actions/partsActions";
import PartsForm from "./PartsForm";
import PartsList from "./PartsList";

class PartsContainer extends Component {
  state = {
    showList: false,
    showForm: false,
  };

  handlePartListDisplay = (e) => {
    e.preventDefault();
    this.state.showList === false
      ? this.setState({ showList: true })
      : this.setState({ showList: false });
  };
  handlePartFormDisplay = (e) => {
    e.preventDefault();
    this.state.showForm === false
      ? this.setState({ showForm: true })
      : this.setState({ showForm: false });
  };

  componentDidMount() {
    this.props.fetchParts();
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePartListDisplay}>Parts List</button>
        {this.state.showList ? <PartsList /> : null}
        <button onClick={this.handlePartFormDisplay}>Part Form</button>
        {this.state.showForm ? <PartsForm /> : null}
      </div>
    );
  }
}

export default connect(null, { fetchParts })(PartsContainer);
