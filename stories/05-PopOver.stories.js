import React from 'react';
import { action } from '@storybook/addon-actions';
import PopoverTop from '../src/components/PopTop'
import '../src/components/ComponentsStyles.css'
export default {
    title: 'popover',             
  };
  export const popover = () => (
   <div className="UI-Section-content">
     <PopoverTop />
   </div>
  );