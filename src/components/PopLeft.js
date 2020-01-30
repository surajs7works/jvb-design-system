import React from 'react';
import { Button } from './Popover'
import './ComponentsStyles.css'
export default class PopoverLeft extends React.Component {
    constructor(){
    super()
        this.state = {
            showModal:false

        }
    }
    showModal = (event) => {
        event.preventDefault();
        if(this.state.showModal != true){
          this.setState({ showModal: true 
          });
        }
        else{
          this.setState({ showModal: false
          });
        }
       
      }
     
    render(){
        return(
          <div className="whitebtn" style={{justifyContent:'space-between'}}>
            <div >
                <Button className="whitebtn" onClick={this.showModal} style={{marginLeft:"684px"}}>
          Left
        </Button>

        {this.state.showModal && 
        <div >
        
            <div className="box arrow-left left" >
            <header style={{textAlign:"center",fontSize:"20px"}}>Popover Left</header>
            <p>The popover information to be written here</p>
          </div>
          
          </div>
          }

            </div>
            
            </div>
        )
    }

}