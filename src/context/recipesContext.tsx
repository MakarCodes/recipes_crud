import { createContext, ReactNode, useReducer, useEffect } from 'react';
import { initialState, recipesReducer } from '../reducer/recipesReducer';
import { IInitialState } from '../reducer/recipesReducerTypes';
import { actionsFactory } from './actionsFactory';

interface IRecipesContext {
  recipesState: IInitialState;
  recipesActions: {
    addRecipe: (name: string, ingredients: string) => void;
    setRecipeToRemove: (recipe: IRecipe | null) => void;
    removeRecipe: (id: string) => void;
    setEditedRecipe: (recipe: IRecipe | null) => void;
    editRecipe: (recipe: IRecipe) => void;
  };
}

const initCtx: IRecipesContext = {
  recipesState: initialState,
  recipesActions: {
    addRecipe: (name: string, ingredients: string) => {},
    setRecipeToRemove: (recipe: IRecipe | null) => {},
    removeRecipe: (id: string) => {},
    setEditedRecipe: (recipe: IRecipe | null) => {},
    editRecipe: (recipe: IRecipe) => {},
  },
};

export const recipesContext = createContext(initCtx);

const RecipiesContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [recipesState, dispatch] = useReducer(recipesReducer, initialState);
  const actions = actionsFactory(dispatch);

  //add recipes to local storage on any change in recipes
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipesState.recipes));
  }, [recipesState.recipes]);

  const {
    addRecipe,
    setRecipeToRemove,
    removeRecipe,
    setEditedRecipe,
    editRecipe,
  } = actions;

  const recipesActions = {
    addRecipe,
    setRecipeToRemove,
    removeRecipe,
    setEditedRecipe,
    editRecipe,
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
