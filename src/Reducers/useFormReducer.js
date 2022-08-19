import { createElement } from "../Utils/formUtils";

const useFormReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ELEMENT":
      const {elementType} = action
      return {
        ...state, items: [...state.items, createElement(state.items.length, elementType)] 
      }
  }
};

export { useFormReducer };
