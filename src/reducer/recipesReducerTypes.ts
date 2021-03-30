export interface IInitialState {
  recipes: IRecipe[];
  editedRecipe: IRecipe | null;
  recipeForRemoval: IRecipe | null;
}

export enum ActionTypes {
  ADD_RECIPE = 'ADD_RECIPE',
  REMOVE_RECIPE = 'REMOVE_RECIPE',
  SET_EDITED_RECIPE = 'SET_EDITED_RECIPE',
  EDIT_RECIPE = 'EDIT_RECIPE',
  SET_RECIPE_TO_REMOVE = 'SET_RECIPE_TO_REMOVE',
}

export type AddRecipeAction = {
  type: 'ADD_RECIPE';
  payload: { name: string; ingredients: string };
};
export type RemoveRecipeAction = {
  type: 'REMOVE_RECIPE';
  payload: { id: string };
};
export type SetEditRecipeAction = {
  type: 'SET_EDITED_RECIPE';
  payload: { recipe: IRecipe };
};
export type EditRecipeAction = {
  type: 'EDIT_RECIPE';
  payload: { recipe: IRecipe };
};
export type SetRecipeToRemoveAction = {
  type: 'SET_RECIPE_TO_REMOVE';
  payload: { recipe: IRecipe };
};

export type Actions =
  | AddRecipeAction
  | RemoveRecipeAction
  | SetEditRecipeAction
  | EditRecipeAction
  | SetRecipeToRemoveAction;
