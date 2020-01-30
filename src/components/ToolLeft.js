import React from 'react';
import { Button } from './Popover'
import './ComponentsStyles.css'
export default class ToolLeft extends React.Component {
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
      hideModal = (event) => {
        event.preventDefault();
        if(this.state.showModal != false){
          this.setState({ showModal: false 
          });
        }
        else{
          this.setState({ showModal: true
          });
        }
     
    }
     
    render(){
        return(
          <div className="whitebtn" style={{justifyContent:'space-between'}}>
            <div >
                <Button className="whitebtn" onMouseOver={this.showModal} onMouseOut={this.hideModal} style={{marginLeft:"684px"}}>
          Left
        </Button>

        {this.state.showModal && 
        <div >
        
            <div className="boxtool arrow-left lefttool" >
            <header style={{textAlign:"center",fontSize:"20px"}}>ToolTip Left</header>
            
          </div>
          
          </div>
          }

            </div>
            
            </div>
        )
    }

}