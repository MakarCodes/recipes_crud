import { createContext, ReactNode, useReducer, useEffect } from 'react';
import {
  initialState,
  recipesReducer,
  ActionTypes,
} from '../reducers/recipesReducer';

// export const addRecipe = (name: string, ingredients: string) => ({
//   type: ActionTypes.ADD_RECIPE,
//   payload: { name, ingredients },
// });
// export const setRecipeToRemove = (recipe: IRecipe) => ({
//   type: ActionTypes.SET_RECIPE_TO_REMOVE,
//   payload: { recipe },
// });
// export const removeRecipe = (id: string) => ({
//   type: ActionTypes.REMOVE_RECIPE,
//   payload: { id },
// });
// export const setEditedRecipe = (recipe: IRecipe) => ({
//   type: ActionTypes.SET_EDITED_RECIPE,
//   payload: { recipe },
// });
// export const editRecipe = (recipe: IRecipe) => ({
//   type: ActionTypes.EDIT_RECIPE,
//   payload: { recipe },
// });

interface IRecipesContext {
  recipesState: IInitialState;
  recipesActions: {
    addRecipe: (name: string, ingredients: string) => void;
  };
}

const initCtx: IRecipesContext = {
  recipesState: initialState,
  recipesActions: {
    addRecipe: (name: string, ingredients: string) => {},
  },
};

export const recipesContext = createContext(initCtx);

const RecipiesContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [recipesState, dispatch] = useReducer(recipesReducer, initialState);

  //add recipes to local storage if on any change in recpies
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipesState.recipes));
  }, [recipesState.recipes]);

  const recipesActions = {
    addRecipe: (name: string, ingredients: string) =>
      dispatch({
        type: ActionTypes.ADD_RECIPE,
        payload: { name, ingredients },
      }),
  };

  const providerValue = {
    recipesState,
    recipesActions,
  };
  return (
    <recipesContext.Provider value={providerValue}>
      {children}
    </recipesContext.Provider>
  );
};

export default RecipiesContextProvider;
