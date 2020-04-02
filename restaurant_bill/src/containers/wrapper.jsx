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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    let { people, totalBill, extraTip } = this.state
    
    if (extraTip === ""){
      extraTip = 0;
    }
    
    if ( people === ""){
      people = 2;
    } 
    
    if ( totalBill === ""){
      totalBill = 0;
    }

    return (
      <div className="wrapper">
        <div className="input-group">
          <label htmlFor="people">Number of People: </label>
          <input
            id="people"
            name="people"
            type="number"
            min="0"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={extraTip}  
          />  
        </div>
        <div>
          <h3>Result: <span>{ calculateBill({ people, totalBill, extraTip }).toFixed(2) }</span></h3>
        </div>
      </div>
    );
  }
};

export default Wrapper;
