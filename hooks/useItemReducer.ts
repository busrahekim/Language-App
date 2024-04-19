import { useReducer } from "react";

interface Item {
  eng: string;
  tr: string;
  sentence?: string;
}

interface State {
  items: Item[];
}

interface Action {
  type: "ADD_ITEM" | "DELETE_ITEM";
  payload: Item;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

const useItemReducer = () => {
  const initalState: State = {
    items: [],
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const addItem = (item: Item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return { state, addItem };
};

export default useItemReducer;
