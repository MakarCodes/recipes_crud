import { v4 as uuidv4 } from 'uuid';
import { updateObject } from '../utilities/updateObject';
import {
  AddRecipeAction,
  EditRecipeAction,
  IInitialState,
  RemoveRecipeAction,
  SetEditRecipeAction,
  SetRecipeToRemoveAction,
} from './recipesReducerTypes';

export const addRecipe = (state: IInitialState, action: AddRecipeAction) => {
  const newRecipe = {
    id: uuidv4(),
    name: action.payload.name,
    ingredients: action.payload.ingredients.split(','),
  };
  const updatedListOfRecipes = [...state.recipes];
  updatedListOfRecipes.push(newRecipe);
  return updateObject(state, {
    recipes: updatedListOfRecipes,
  });
};
export const setRecipeToRemove = (
  state: IInitialState,
  action: SetRecipeToRemoveAction
) => {
  return updateObject(state, {
    recipeForRemoval: action.payload.recipe,
  });
};
export const removeRecipe = (
  state: IInitialState,
  action: RemoveRecipeAction
) => {
  const recipiesAfterRemoval = state.recipes.filter(
    (recipe: IRecipe) => recipe.id !== action.payload.id
  );
  return updateObject(state, {
    recipes: recipiesAfterRemoval,
    recipeForRemoval: null,
  });
};
export const setEditedRecipe = (
  state: IInitialState,
  action: SetEditRecipeAction
) => {
  return updateObject(state, {
    editedRecipe: action.payload.recipe,
  });
};
export const editRecipe = (state: IInitialState, action: EditRecipeAction) => {
  const updatedRecipies = state.recipes.map((recipe: IRecipe) => {
    return recipe.id === action.payload.recipe.id
      ? action.payload.recipe
      : recipe;
  });
  return updateObject(state, {
    recipes: updatedRecipies,
    editedRecipe: null,
  });
};
