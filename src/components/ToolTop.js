import React from 'react';
import { Button } from './Tooltip'
import  ToolBottom  from './ToolBottom'
import ToolLeft from './ToolLeft'
import ToolRight from './ToolRight'
import './ComponentsStyles.css'
export default class ToolTop extends React.Component {
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
         <Button className="whitebtn" onMouseOver={this.showModal} onMouseOut={this.hideModal}>
        Top
      </Button>

      {this.state.showModal && 
      <div >

     
      <div class="boxtool arrow-top">
        <header style={{textAlign:"center",fontSize:"20px"}}>ToolTip Top</header>
        
</div>
          
            </div>
        }

          </div>
          
          <ToolBottom />
         
          <ToolLeft />
          <ToolRight />
          </div>
      )
  }

}