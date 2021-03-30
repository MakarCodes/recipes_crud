import { useContext, useEffect } from 'react';
import { recipesContext } from '../../../contexts/recipesContext';
import SingleRecipe from './SingleRecipe/SingleRecipe';

const Recipes = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);

  useEffect(() => {
    console.log(recipesState);
  }, [recipesState]);
  return (
    <div>
      RECipes
      <button
        onClick={() =>
          recipesActions.addRecipe('szpagetti', 'makaron,mieso,kielbasa')
        }
      >
        add
      </button>
      {recipesState.recipes.map(({ id, name, ingredients }) => (
        <SingleRecipe key={id} name={name} ingredients={ingredients} />
      ))}
    </div>
  );
};

export default Recipes;
