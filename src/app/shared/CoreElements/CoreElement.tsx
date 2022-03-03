import React from 'react';
import { CustomInput } from '../components/atoms/CustomInput';
import './style.css';

const CoreElements: React.FC = () => {
  return (
    <div className='coreElementsWrapper'>
      <h3>Componente Input: </h3>
      <CustomInput
        error=''
        name='name'
        label='label'
        placeholder='placeholder'
        type='string'
        value='value'
      />
      <CustomInput
        error=''
        name='name'
        label='label'
        placeholder='placeholder'
        type='number'
        value='value'
      />
    </div>
  );
};

export default CoreElements;
