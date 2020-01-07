import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card, ColoredCard } from '../src/components/Cards'
import icon from '../src/assets/icon1.svg';
import '../src/components/ComponentsStyles.css'

export default {
  title: 'card',
};


export const card = () => (
  <div className="UI-Section-content">
    <Card>hello</Card>
    <ColoredCard>
      <div><img src={icon}></img></div>
    <h4>Aerobic / 
Anaerobic Stats</h4>  
      </ColoredCard>
  </div>

);




