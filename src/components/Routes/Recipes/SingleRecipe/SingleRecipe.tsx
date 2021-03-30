import { useMemo } from 'react';
import useVisibility from '../../../../customHooks/useVisibility';
import classes from './SingleRecipe.module.scss';

interface IProps {
  name: string;
  ingredients: string[];
}

const SingleRecipe: React.FC<IProps> = ({ name, ingredients }) => {
  const { isVisible, toggleVisibility } = useVisibility();

  const ingredientList = useMemo(
    () =>
      ingredients.map((ingredient, idx) => (
        <li className={classes.SingleIngredient} key={ingredient + idx}>
          {ingredient}
        </li>
      )),
    [ingredients]
  );
  return (
    <div className={classes.Card}>
      <div className={classes.Name} onClick={() => toggleVisibility()}>
        {name}
      </div>
      {isVisible && (
        <div className={classes.IngredientsWrapper}>
          <ul className={classes.Ingredients}>{ingredientList}</ul>
        </div>
      )}
    </div>
  );
};

export default SingleRecipe;
