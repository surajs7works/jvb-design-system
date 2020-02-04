import React from 'react';
import './ComponentsStyles.css'
import  SelectForm from '../components/selectBtn'
import  ErrorForm from './Error'
export default class NameForm extends React.Component {
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
                 <h3>Field</h3>
                <input type="text"  placeholder = "input name" placeholderColor="white" className='InputForms' value={this.state.value} onChange={this.handleChange} />
                 < SelectForm/> 
                 <ErrorForm/>  
                        
                    </div>
            </form>
          );
        }
      }