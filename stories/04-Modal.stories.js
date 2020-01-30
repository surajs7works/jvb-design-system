import React from 'react';
import { action } from '@storybook/addon-actions';
import ModalButton from '../src/components/ModalButton'
import '../src/components/ComponentsStyles.css'
export default {
    title: 'modal',             
  };
  export const modal = () => (
    <div className="UI-Section-content">
      <ModalButton />
        </div>
  
  );
