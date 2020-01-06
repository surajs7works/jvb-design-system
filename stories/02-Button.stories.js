import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Buttonbtn } from '../src/components/Button'

export default {
  title: 'Button',
};


// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const AllButtons = () => (
  <div style={{ backgroundColor: '#103047', color: 'white', height: '100vh' }}>
    <div><h1>Small Buttons</h1></div>
    <Buttonbtn bluebtn onClick={action('clicked')}>Blue Button</Buttonbtn>
    <Buttonbtn orangebtn onClick={action('clicked')}>se Button</Buttonbtn>
  </div>

);




