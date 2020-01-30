import React from 'react';
import { action } from '@storybook/addon-actions';
import ToolTop from '../src/components/ToolTop'
import '../src/components/ComponentsStyles.css'
export default {
    title: 'tooltip',             
  };
  export const tooltip = () => (
   <div className="UI-Section-content">
     <ToolTop />
   </div>
  );