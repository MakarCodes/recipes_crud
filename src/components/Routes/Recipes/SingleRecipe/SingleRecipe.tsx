import { useMemo, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { recipesContext } from '../../../../context/recipesContext';
import useVisibility from '../../../../customHooks/useVisibility';
import Button from '../../../Resuable/Button/Button';
import classes from './SingleRecipe.module.scss';

interface IProps {
  recipe: IRecipe;
  handleDeleteClick: (recipe: IRecipe) => void;
}

const SingleRecipe: React.FC<IProps> = ({ recipe, handleDeleteClick }) => {
  const { recipesActions } = useContext(recipesContext);
  const { name, ingredients } = recipe;
  const { setEditedRecipe } = recipesActions;

  const history = useHistory();

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

  const handleEditBtnClick = useCallback(
    (recipe: IRecipe) => {
      setEditedRecipe(recipe);
      history.push('/form');
    },
    [setEditedRecipe, history]
  );
  return (
    <div className={classes.Card}>
      <div
        className={classes.Name}
        onClick={() => toggleVisibility()}
        data-testid={recipe.name}
      >
        {name}
      </div>
      {isVisible && (
        <div className={classes.IngredientsWrapper}>
          <ul className={classes.Ingredients} data-testid='ingredients'>
            {ingredientList}
          </ul>
          <div className={classes.ButtonsContainer}>
            <Button
              text='Edit'
              bgColor='grey'
              action={() => handleEditBtnClick(recipe)}
              testID='edit-btn'
            />
            <Button
              text='Remove'
              bgColor='#c64756'
              action={() => handleDeleteClick(recipe)}
              testID='remove-btn'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipe;
