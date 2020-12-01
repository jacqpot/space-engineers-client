import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchParts } from "../actions/partsActions";
import PartsForm from "./PartsForm";
import PartsList from "./PartsList";

class PartsContainer extends Component {
  state = {
    showList: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.state.showList === false
      ? this.setState({ showList: true })
      : this.setState({ showList: false });
    console.log(this.state);
  };

  componentDidMount() {
    this.props.fetchParts();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Parts List</button>
        <PartsList />
        <PartsForm />
      </div>
    );
  }
}

export default connect(null, { fetchParts })(PartsContainer);
