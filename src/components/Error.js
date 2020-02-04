import React from 'react';
import './ComponentsStyles.css'
export default class ErrorForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        render() {
          return (
            <form >
              <div>
                 <h3>Error-Field</h3>
                <input type="text"  placeholder = "Select" placeholderColor="white" className='InputForms' value={this.state.value} onChange={this.handleChange} />
                <div>
                <span style={{color:"red"}}><u>Oops! is this correct?</u></span>
                  </div>
                    </div>
            </form>
          );
        }
      }