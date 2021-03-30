interface IRecipe {
  id: string;
  name: string;
  ingredients: string;
}

interface IInitialState {
  recipes: IRecipe[];
  editRecipe: IRecipe | null;
  recipeForRemoval: IRecipe | null;
}
