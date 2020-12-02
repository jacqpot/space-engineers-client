import React, { Component } from "react";
import { addBlock } from "../../actions/blockActions";
import { connect } from "react-redux";
class BlockForm extends Component {
  state = {
    name: "",
    category: "",
    size: "",
  };

  typeOptions = [];

  sizeOptions = [];

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
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
        <label>Block Name: </label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <br />
        <label>Block Type: </label>

        <select value={this.state.category} onChange={this.handleChange}>
          <option defaultValue=""> </option>
          <option value="Armor"> Armor</option>
          <option value="Automation"> Automation</option>
          <option value="Conveyor / Cargo"> Conveyor / Cargo</option>
          <option value="Cockpit / Control"> Cockpit / Control</option>
          <option value="Communications"> Communications</option>
          <option value="Decorative Blocks DLC"> Decorative Blocks DLC</option>
          <option value="Decoorative Blocks 2 DLC">
            {" "}
            Decorative Blocks 2 DLC
          </option>
          <option value="Doors"> Doors</option>
          <option value="Economy"> Economy</option>
          <option value="Frostbite DLC"> Frostbite DLC</option>
          <option value="Gravity"> Gravity</option>
          <option value="Interiors"> Interiors</option>
          <option value="LCD Panels"> LCD Panels</option>
          <option value="Lights"> Lights</option>
          <option value="Mechanical"> Mechanical</option>
          <option value="Medical"> Medical</option>
          <option value="Production"> Production</option>
          <option value="Power"> Power</option>
          <option value="Tools"> Tools</option>
          <option value="Thrusters"> Thrusters</option>
          <option value="Utility"> Utility</option>
          <option value="Weapons"> Weapons</option>
          <option value="Wheels"> Wheels</option>
          <option value="Windows"> Windows</option>
        </select>
        <br />
        <label>Block Size: </label>

        <select
          defaultValue=""
          value={this.state.size}
          onChange={this.handleChange}
        >
          {" "}
          <option defaultValue=""> </option>
          <option value="Large"> Large</option>
          <option value="Either"> Either</option>
          <option value="Small"> Small</option>
        </select>

        <br />

        <br />
        <input type="submit" value="Create Block" />
      </form>
    );
  }
}

export default connect(null, { addBlock })(BlockForm);
