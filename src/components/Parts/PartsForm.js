import React, { Component } from "react";
import { addPart } from "../../actions/partsActions";
import { connect } from "react-redux";
class PartsForm extends Component {
  state = {
    name: "",
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
    this.setState({ name: "" });
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
        <input type="submit" value="Create Part" />
      </form>
    );
  }
}

export default connect(null, { addPart })(PartsForm);
