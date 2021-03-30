import {
  addRecipe,
  editRecipe,
  removeRecipe,
  setEditedRecipe,
  setRecipeToRemove,
} from './recipesReducerFunctions';
import { Actions, ActionTypes, IInitialState } from './recipesReducerTypes';

const recipes: IRecipe[] = JSON.parse(localStorage.getItem('recipes') || '[]');

export const initialState: IInitialState = {
  recipes: recipes,
  editedRecipe: null,
  recipeForRemoval: null,
};

export const recipesReducer = (
  state: IInitialState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.ADD_RECIPE:
      return addRecipe(state, action);
    case ActionTypes.SET_RECIPE_TO_REMOVE:
      return setRecipeToRemove(state, action);
    case ActionTypes.REMOVE_RECIPE:
      return removeRecipe(state, action);
    case ActionTypes.SET_EDITED_RECIPE:
      return setEditedRecipe(state, action);
    case ActionTypes.EDIT_RECIPE:
      return editRecipe(state, action);
    default:
      return state;
  }
};
