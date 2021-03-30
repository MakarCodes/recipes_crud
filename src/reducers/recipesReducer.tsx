import { v4 as uuidv4 } from 'uuid';
import { updateObject } from '../utilities/updateObject';

//@ts-ignore
const recipes: IRecipe[] = JSON.parse(localStorage.getItem('recipes'));

export const initialState: IInitialState = {
  recipes: recipes || [],
  editRecipe: null,
  recipeForRemoval: null,
};

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

const addRecipe = (state: IInitialState, action: AddRecipeAction) => {
  const newRecipe = {
    id: uuidv4(),
    name: action.payload.name,
    ingredients: action.payload.ingredients,
  };
  const updatedListOfRecipes = [...state.recipes];
  updatedListOfRecipes.push(newRecipe);
  return updateObject(state, {
    recipes: updatedListOfRecipes,
  });
};
const setRecipeToRemove = (
  state: IInitialState,
  action: SetRecipeToRemoveAction
) => {
  return updateObject(state, {
    recipeForRemoval: action.payload.recipe,
  });
};
const removeRecipe = (state: IInitialState, action: RemoveRecipeAction) => {
  const recipiesAfterRemoval = state.recipes.filter(
    (recipe: IRecipe) => recipe.id !== action.payload.id
  );
  return updateObject(state, {
    recipes: recipiesAfterRemoval,
    recipeForRemoval: null,
  });
};
const setEditedRecipe = (state: IInitialState, action: SetEditRecipeAction) => {
  return updateObject(state, {
    editRecipe: action.payload.recipe,
  });
};
const editRecipe = (state: IInitialState, action: EditRecipeAction) => {
  const updatedRecipies = state.recipes.map((recipe: IRecipe) => {
    return recipe.id === action.payload.recipe.id
      ? action.payload.recipe
      : recipe;
  });
  return updateObject(state, {
    recipes: updatedRecipies,
    editRecipe: null,
  });
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
