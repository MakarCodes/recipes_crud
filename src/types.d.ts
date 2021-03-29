interface IRecipe {
  id: string;
  name: string;
  ingredients: string;
}

interface IInitialState {
  recipies: IRecipe[];
  editRecipe: IRecipe | null;
  recipeForRemoval: IRecipe | null;
}
