import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { Colortile } from '../src/components/DesignSys'
import icon from '../src/assets/icon1.svg';
import '../src/components/ComponentsStyles.css'
import Dropdownbtn from '../src/components/Dropdownbtn'


export default {
  title: 'Design Guide',
};


export const Colors = () => (
  <div className="UI-Section-content">
    <div className="div-section">
      <h1>Base Colors</h1>
      <div className="Tile-style">
        <Colortile className="baseclr1"></Colortile>
        <p>#0A273B</p>
      </div>
      <div className="Tile-style">
        <Colortile className="baseclr2"></Colortile>
        <p>#CACACA</p>
      </div>
      <div className="Tile-style">
        <Colortile className="baseclr3"></Colortile>
        <p>#0A273B</p>
      </div>
      <div className="Tile-style">
        <Colortile className="baseclr4"></Colortile>
        <p>#CACACA</p>
      </div>
    </div>

    <div className="div-section">
      <h1>Primary Colors</h1>
      <div className="Tile-style">
        <Colortile className="primaryclr1"></Colortile>
        <p>#F24E54</p>
      </div>
      <div className="Tile-style">
        <Colortile className="primaryclr2"></Colortile>
        <p>#CACACA</p>
      </div>
      <div className="Tile-style">
        <Colortile className="primaryclr3"></Colortile>
        <p>#0A273B</p>
      </div>
    </div>

    <div className="div-section">
      <h1>Indication color</h1>
      <div className="Tile-style">
        <Colortile className="Indicationclr1"></Colortile>
        <p>Active</p>
        <p>#008000</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr2"></Colortile>
        <p>Inactive</p>
        <p>#FF0000</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr3"></Colortile>
        <p>Strength</p>
        <p>#FF00FF</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr4"></Colortile>
        <p>Sleeping</p>
        <p>#00B0F0</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr5"></Colortile>
        <p>Exercise</p>
        <p>#FD9A44</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr6"></Colortile>
        <p>No Data Yet</p>
        <p>#A5A7A5</p>
      </div>
      <div className="Tile-style">
        <Colortile className="Indicationclr7"></Colortile>
        <p>Time Zone Change</p>
        <p>#FDEAB7</p>
      </div>
    </div>

  </div>


);


export const Typography = () => (
  <div>
    <h1>Fonts</h1>
    
  </div>
);




