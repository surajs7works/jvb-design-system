import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Buttonbtn, Title } from '../src/components/Button';
import styled from 'styled-components';
import '../src/components/ComponentsStyles.css'

export default {
  title: 'Button',
};



// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const AllButtons = () => (
  <div style={{ backgroundColor: '#103047', color: 'white', height: '100vh' }}>

    <div className="Large-Button-section">
      <Title>Large Buttons</Title>
      <Buttonbtn className='Largebtn' onClick={action('clicked')} >se Button</Buttonbtn>
    </div>

    <div className="medium-Buttons-section">
      <Title>Medium Buttons</Title>
      <Buttonbtn className='Bluebtn' onClick={action('clicked')}>Blue Button</Buttonbtn>
      <Buttonbtn className='Orangebtn' onClick={action('clicked')} >Button</Buttonbtn>
      <Buttonbtn className='Outlinebtn' onClick={action('clicked')} >Button</Buttonbtn>
    </div>
  </div>

);




