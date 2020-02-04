import React from 'react';
import { action } from '@storybook/addon-actions';
import NameForm from '../src/components/Form'
import '../src/components/ComponentsStyles.css'
export default {
    title: 'form',             
  };
  export const form = () => (
    <div className="UI-Section-content">
      < NameForm />
        </div>
  
  );
