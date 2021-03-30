import { useMemo, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { recipesContext } from '../../../../context/recipesContext';
import useVisibility from '../../../../customHooks/useVisibility';
import Button from '../../../Resuable/Button/Button';
import classes from './SingleRecipe.module.scss';

interface IProps {
  recipe: IRecipe;
}

const SingleRecipe: React.FC<IProps> = ({ recipe }) => {
  const history = useHistory();
  const { recipesState, recipesActions } = useContext(recipesContext);
  const { isVisible, toggleVisibility } = useVisibility();
  const { name, ingredients } = recipe;
  const ingredientList = useMemo(
    () =>
      ingredients.map((ingredient, idx) => (
        <li className={classes.SingleIngredient} key={ingredient + idx}>
          {ingredient}
        </li>
      )),
    [ingredients]
  );

  const handleEditBtnClick = (recipe: IRecipe) => {
    recipesActions.setEditedRecipe(recipe);
    history.push('/form');
  };
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
      <div className={classes.ButtonsContainer}>
        <Button
          text='Edit recipe'
          bgColor='#007bff'
          action={() => handleEditBtnClick(recipe)}
          testID='edit-btn'
        />
      </div>
    </div>
  );
};

export default SingleRecipe;
