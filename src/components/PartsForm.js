import React, { Component } from "react";

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
  render() {
    return (
      <form>
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

export default PartsForm;
