import React from 'react';
import { Button } from './Popover'
import  PopoverBottom  from './PopBottom'
import PopoverLeft from './PopLeft'
import PopoverRight from './PopRight'
import './ComponentsStyles.css'
export default class PopoverTop extends React.Component {
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
         <Button className="whitebtn" onClick={this.showModal} >
        Top
      </Button>

      {this.state.showModal && 
      <div >

     
      <div class="box arrow-top">
        <header style={{textAlign:"center",fontSize:"20px"}}>Popover Top</header>
        <p>The popover information to be written here</p>
</div>
          
            </div>
        }

          </div>
          
          <PopoverBottom />
         
          <PopoverLeft />
          <PopoverRight />
          </div>
      )
  }

}