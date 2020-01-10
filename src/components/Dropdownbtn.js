import React, { Component } from 'react';
import { Button } from './Button'


export class Dropdownbtn extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }



  render() {
    return (
      <div>
        <Button className="whitebtn" onClick={this.showMenu}>
          Show menu <span>&#9662;</span>
        </Button>

        {
          this.state.showMenu
            ? (
              <ul className="dropdoen-menu-list">
                <li> Option 1 </li>
                <li> Option 2 </li>
                <li> Option  3</li>
                <li> Option 4 </li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

