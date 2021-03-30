import { Actions, ActionTypes } from '../reducer/recipesReducerTypes';

export const actionsFactory = (dispatch: React.Dispatch<Actions>) => ({
  addRecipe: (name: string, ingredients: string) =>
    dispatch({
      type: ActionTypes.ADD_RECIPE,
      payload: { name, ingredients },
    }),
  setRecipeToRemove: (recipe: IRecipe | null) =>
    dispatch({
      type: ActionTypes.SET_RECIPE_TO_REMOVE,
      payload: { recipe },
    }),
  removeRecipe: (id: string) =>
    dispatch({ type: ActionTypes.REMOVE_RECIPE, payload: { id } }),
  setEditedRecipe: (recipe: IRecipe) =>
    dispatch({ type: ActionTypes.SET_EDITED_RECIPE, payload: { recipe } }),
  editRecipe: (recipe: IRecipe) =>
    dispatch({ type: ActionTypes.EDIT_RECIPE, payload: { recipe } }),
  clearEditedRecipe: () => dispatch({ type: ActionTypes.CLEAR_EDITED_RECIPE }),
});
