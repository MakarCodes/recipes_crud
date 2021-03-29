import { createContext, ReactNode, useReducer } from 'react';
import {
  initialState,
  recipiesReducer,
  ActionTypes,
} from '../reducers/recipiesReducer';

export const addRecipe = (name: string, ingredients: string) => ({
  type: ActionTypes.ADD_RECIPE,
  payload: { name, ingredients },
});
export const setRecipeToRemove = (recipe: IRecipe) => ({
  type: ActionTypes.SET_RECIPE_TO_REMOVE,
  payload: { recipe },
});
export const removeRecipe = (id: string) => ({
  type: ActionTypes.REMOVE_RECIPE,
  payload: { id },
});
export const setEditedRecipe = (recipe: IRecipe) => ({
  type: ActionTypes.SET_EDITED_RECIPE,
  payload: { recipe },
});
export const editRecipe = (recipe: IRecipe) => ({
  type: ActionTypes.EDIT_RECIPE,
  payload: { recipe },
});

interface IRecipiesContext {
  recipiesState: IInitialState;
  recipiesActions: {
    addRecipe: (name: string, ingredients: string) => void;
  };
}

const initCtx: IRecipiesContext = {
  recipiesState: initialState,
  recipiesActions: {
    addRecipe: (name: string, ingredients: string) => {},
  },
};

export const recipiesContext = createContext(initCtx);

const RecipiesContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [recipiesState, dispatch] = useReducer(recipiesReducer, initialState);

  const recipiesActions = {
    addRecipe: (name: string, ingredients: string) =>
      dispatch({
        type: ActionTypes.ADD_RECIPE,
        payload: { name, ingredients },
      }),
  };

  const providerValue = {
    recipiesState,
    recipiesActions,
  };
  return (
    <recipiesContext.Provider value={providerValue}>
      {children}
    </recipiesContext.Provider>
  );
};

export default RecipiesContextProvider;
