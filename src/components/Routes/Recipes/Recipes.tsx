import { useContext, useEffect } from 'react';

import classes from './Recipes.module.scss';

import { recipesContext } from '../../../contexts/recipesContext';

import SingleRecipe from './SingleRecipe/SingleRecipe';

const Recipes = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);

  useEffect(() => {
    console.log(recipesState);
  }, [recipesState]);

  return (
    <div className={classes.Wrapper}>
      <button
        onClick={() =>
          recipesActions.addRecipe('Spagetti', 'makaron,mięso,sos pomidorowy')
        }
      >
        add
      </button>
      {!recipesState.recipes.length && (
        <p className={classes.Info}>
          Sorry, lack of new recipes. Please click add button to add new recipe.
        </p>
      )}
      {recipesState.recipes.map(({ id, name, ingredients }) => (
        <SingleRecipe key={id} name={name} ingredients={ingredients} />
      ))}
    </div>
  );
};

export default Recipes;
