import React, { Component } from "react";
import { addBlock } from "../actions/blockActions";
import { connect } from "react-redux";
class BlockForm extends Component {
  state = {
    name: "",
    category: "",
    size: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPart(this.state);
    this.setState({
      name: "",
      category: "",
      size: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Part Name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <label>Part type:</label>
        <input
          type="text"
          value={this.state.category}
          onChange={this.handleChange}
          name="category"
        />
        <label>Large or Small Grid:</label>
        <input
          type="text"
          value={this.state.size}
          onChange={this.handleChange}
          name="size"
        />
        <input type="submit" value="Create Block" />
      </form>
    );
  }
}

export default connect(null, { addBlock })(BlockForm);
