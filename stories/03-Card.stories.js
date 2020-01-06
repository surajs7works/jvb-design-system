import React from 'react';
import { action } from '@storybook/addon-actions';
import {Card} from '../src/components/Cards'


export default {
  title: 'card', 
};


export const card = () => (
  <div style={{ backgroundColor: '#103047', color: 'white', height: '100vh' }}>    
    <Card>hello</Card>
  </div>

);




