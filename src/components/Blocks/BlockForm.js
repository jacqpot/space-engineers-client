import React, { Component } from "react";
import { addBlock } from "../../actions/blockActions";
import { connect } from "react-redux";
import Select from "react-select";
class BlockForm extends Component {
  state = {
    name: "",
    category: "",
    size: "",
  };

  typeOptions = [
    { value: "Armor", label: "Armor" },
    { value: "Automation", label: "Automation" },
    { value: "Conveyor / Cargo", label: "Conveyor / Cargo" },
    { value: "Cockpit / Control", label: "Cockpit / Control" },
    { value: "Communications", label: "Communications" },
    { value: "Decorative Blocks DLC", label: "Decorative Blocks DLC" },
    { value: "Decoorative Blocks 2 DLC", label: "Decoorative Blocks 2 DLC" },
    { value: "Doors", label: "Doors" },
    { value: "Economy", label: "Economy" },
    { value: "Frostbite DLC", label: "Frostbite DLC" },
    { value: "Gravity", label: "Gravity" },
    { value: "Interiors", label: "Interiors" },
    { value: "LCD Panels", label: "LCD Panels" },
    { value: "Lights", label: "Lights" },
    { value: "Mechanical", label: "Mechanical" },
    { value: "Medical", label: "Medical" },
    { value: "Production", label: "Production" },
    { value: "Power", label: "Power" },
    { value: "Tools", label: "Tools" },
    { value: "Thrusters", label: "Thrusters" },
    { value: "Utility", label: "Utility" },
    { value: "Weapons", label: "Weapons" },
    { value: "Wheels", label: "Wheels" },
    { value: "Windows", label: "Windows" },
  ];

  sizeOptions = [
    { value: "Large", label: "Large" },
    { value: "Either", label: "Either" },
    { value: "Small", label: "Small" },
  ];

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleCategoryChange = (value) => {
    console.log(value);
    this.setState({
      category: value,
    });
  };
  handleSizeChange = (value) => {
    console.log(value);
    this.setState({
      size: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBlock(this.state);
    this.setState({
      name: "",
      category: "",
      size: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Block Name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <br />
        <Select
          options={this.typeOptions}
          onChange={this.handleCategoryChange}
          value={this.state.category}
          name="category"
        />
        <br />
        <Select
          options={this.sizeOptions}
          onChange={this.handleSizeChange}
          value={this.state.size}
          name="size"
        />

        <br />
        <input type="submit" value="Create Block" />
      </form>
    );
  }
}

export default connect(null, { addBlock })(BlockForm);
