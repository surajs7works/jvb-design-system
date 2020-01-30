import React from 'react';
import { Button } from '../components/Modal'
import {Modal}from '../components/Modal'
import './ComponentsStyles.css'
export default class ModalButton extends React.Component{
    constructor(){
    super()
        this.state = {
            showModal:false

        }
    }
    showModal = (event) => {
        event.preventDefault();
    
        this.setState({ showModal: true 
        });
      }
      closeModal = () => {
        this.setState({ showModal: false
            
        });

      }
    render(){
        return(
            <div>
                <Button className="whitebtn" onClick={this.showModal}>
          Open
        </Button>

        {this.state.showModal && 
        <div className="modal">

        <Modal>
            <div className='row'>
              <h3>Model title</h3>
              
              <p className="Closemodal"
              onClick={this.closeModal}>&#x2715;</p>

              </div>
 <p style={{fontSize:'15px'}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.</p>
              
          
          </Modal>
          </div>
          }

            </div>
        )
    }

}