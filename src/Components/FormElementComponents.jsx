import React from 'react';
import { ELEMENT_TYPE } from '../Constants/constants';
import { TextAreaElement, TextElement } from './FormsElemnts';

const ElementDictionary = {
  [ELEMENT_TYPE.TEXT]: TextElement,
  [ELEMENT_TYPE.TEXTAREA] : TextAreaElement
}

const FormElementComponents = (props) => {
  console.log(props)
  const MyReactElement = ElementDictionary[props.element.type]
  return (
    <MyReactElement/>
  );
}

export default FormElementComponents;
