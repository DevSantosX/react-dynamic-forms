import React from 'react';
import FormElementComponents from './FormElementComponents';

const FormEditElement = (props) => {

  const {element} = props

  return (
    <div>
      <FormElementComponents element={element}/>
    </div>
  );
}

export default FormEditElement;

