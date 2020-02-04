import React from 'react';
import './ComponentsStyles.css'
export default class SelectForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'select'};
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      return (
        <form >
          <div >
          <h3 className='selectForm'>Select Field</h3>
     <select placeholder = "Select" className='selectOption'>
     <option value="Select">Select</option>
     <option value="Grapefruit">Grapefruit</option>
     <option value="Lime">Lime</option>
     <option value="Coconut">Coconut</option>
     <option value="mango">Mango</option>
   </select>
     
          </div>
        </form>
      );
    }
  }