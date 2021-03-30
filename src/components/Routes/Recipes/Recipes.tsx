import { useContext, useEffect } from 'react';

import classes from './Recipes.module.scss';

import { recipesContext } from '../../../context/recipesContext';
import SingleRecipe from './SingleRecipe/SingleRecipe';
import Button from '../../Resuable/Button/Button';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);

  useEffect(() => {
    console.log(recipesState);
  }, [recipesState]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.AddBtnBox}>
        <Link to='/form' className={classes.AddLink}>
          Add new
        </Link>
      </div>

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
