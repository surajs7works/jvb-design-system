import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Button, Title } from '../src/components/Button';
import styled from 'styled-components';
import '../src/components/ComponentsStyles.css'

export default {
  title: 'Button',
};



// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const AllButtons = () => (
  <div className="UI-Section-content">

    <div className="Large-Button-section">
      <Title>Large Buttons</Title>
      <Button className='Largebtn' onClick={action('clicked')} >Button</Button>
    </div>

    <div className="medium-Buttons-section">
      <Title>Medium Buttons</Title>
      <Button className='Primary' onClick={action('clicked')}>Dafult</Button>
      <Button className='Orangebtn' onClick={action('clicked')} >secondary</Button>
      <Button className='Outlinebtn' onClick={action('clicked')} >Outline</Button>
    </div>

    {/* <div className="Large-Button-section">
      <Title>Dropdown Buttons</Title>
      <Button className='Largebtn' onClick={action('clicked')} >Button</Button>
    </div> */}

  </div>

);





