import { useEffect, useMemo } from 'react';
import classes from './SingleRecipe.module.scss';

interface IProps {
  name: string;
  ingredients: string[];
}
const SingleRecipe: React.FC<IProps> = ({ name, ingredients }) => {
  const ingredientList = useMemo(
    () => ingredients.map(ingredient => <li>{ingredient}</li>),
    [ingredients]
  );
  return (
    <div className={classes.Card}>
      <div className={classes.Name}>{name}</div>
      <div className={classes.Ingredients}>
        <ul>{ingredientList}</ul>
      </div>
    </div>
  );
};

export default SingleRecipe;
