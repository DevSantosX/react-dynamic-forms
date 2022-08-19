import React, { useReducer } from "react";
import {ELEMENT_TYPE, ACTIONS} from '../Constants/constants'
import { useFormReducer } from "../Reducers/useFormReducer";
import FormEditElement from "./FormEditElement";


const FormItems = (props) => {
  const {items} =  props

  return (
    items.map(item => {
      return <FormEditElement key={item.displayOrder} element={item}/>
    })
  )
}


const Formbuilder = () => {
  const [state, dispatch] = useReducer(useFormReducer, {items:[]})

  const onAddElement = (elementType) => dispatch({type: ACTIONS.ADD_ELEMENT, elementType})
  const onRemElement = (elementId) => dispatch({type: ACTIONS.REM_ELEMENT, elementId})
  
  return (
    <div>
      <ul>
      <li><button onClick={() => onAddElement(ELEMENT_TYPE.TEXT)}>Text</button></li>
      <li><button onClick={() => onAddElement(ELEMENT_TYPE.TEXTAREA)}>TextArea</button></li>
    </ul>
    <div>
      <FormItems items={state.items}/>
    </div>
    <div><pre>{JSON.stringify(state.items, null, 3) }</pre></div>
    </div>
  );
}

export default Formbuilder;
