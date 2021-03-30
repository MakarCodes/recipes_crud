interface IInitialState {
  recipes: IRecipe[];
  editRecipe: IRecipe | null;
  recipeForRemoval: IRecipe | null;
}

enum ActionTypes {
  ADD_RECIPE = 'ADD_RECIPE',
  REMOVE_RECIPE = 'REMOVE_RECIPE',
  SET_EDITED_RECIPE = 'SET_EDITED_RECIPE',
  EDIT_RECIPE = 'EDIT_RECIPE',
  SET_RECIPE_TO_REMOVE = 'SET_RECIPE_TO_REMOVE',
}

type AddRecipeAction = {
  type: 'ADD_RECIPE';
  payload: { name: string; ingredients: string };
};
type RemoveRecipeAction = {
  type: 'REMOVE_RECIPE';
  payload: { id: string };
};
type SetEditRecipeAction = {
  type: 'SET_EDITED_RECIPE';
  payload: { recipe: IRecipe };
};
type EditRecipeAction = {
  type: 'EDIT_RECIPE';
  payload: { recipe: IRecipe };
};
type SetRecipeToRemoveAction = {
  type: 'SET_RECIPE_TO_REMOVE';
  payload: { recipe: IRecipe };
};

type Actions =
  | AddRecipeAction
  | RemoveRecipeAction
  | SetEditRecipeAction
  | EditRecipeAction
  | SetRecipeToRemoveAction;
