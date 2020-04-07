import React, { Component } from 'react';
import calculateBill from '../scripts/calculate'

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: 2,
      totalBill: 0,
      extraTip: 0,
    }
  }

  handleChange({ target: { name, value } }) {
    if (value === "" && name === "people"){
      this.setState({ [name]: 2 });
    } else if(value === ""){
      this.setState({ [name]: 0 });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    let { people, totalBill, extraTip } = this.state

    return (
      <div className="wrapper">
        <div className="input-group">
          <label htmlFor="people">Number of People: </label>
          <input
            id="people"
            name="people"
            type="number"
            min="2"
            onChange={(e) => this.handleChange(e)}
            value={people}
          />
        </div>

        <div className="input-group">
          <label htmlFor="totalBill">Total Bill: </label>
          <input
            id="totalBill"
            name="totalBill"
            type="number"
            min="0"
            onChange={(e) => this.handleChange(e)}
            value={totalBill}
          />
        </div>

        <div className="input-group">
          <label htmlFor="extraTip">Extra Tip: </label>
          <input
            id="extraTip"
            name="extraTip"
            type="number"
            min="0"
            onChange={(e) => this.handleChange(e)}
            value={extraTip}  
          />  
        </div>
        <div>
          <h3>Result: <span>{ calculateBill(people, totalBill, extraTip).toFixed(2) }</span></h3>
        </div>
      </div>
    );
  }
};

export default Wrapper;
