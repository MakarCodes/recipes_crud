import { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Recipes.module.scss';

import { recipesContext } from '../../../context/recipesContext';
import useVisibility from '../../../customHooks/useVisibility';

import SingleRecipe from './SingleRecipe/SingleRecipe';
import Modal from '../../UI/Modal/Modal';
import ModalContent from './ModalContent/ModalContent';

const generateRecipesList = (
  recipes: IRecipe[],
  handleDeleteClick: (recipe: IRecipe) => void
) =>
  recipes.map(recipe => (
    <SingleRecipe
      key={recipe.id}
      recipe={recipe}
      handleDeleteClick={handleDeleteClick}
    />
  ));

const Recipes = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);
  const { recipeForRemoval, recipes } = recipesState;

  const { isVisible, toggleVisibility } = useVisibility();

  const handleDeleteClick = useCallback(
    (recipe: IRecipe) => {
      toggleVisibility();
      recipesActions.setRecipeToRemove(recipe);
    },
    [toggleVisibility, recipesActions]
  );

  const recipesList = generateRecipesList(recipes, handleDeleteClick);

  return (
    <div className={classes.Wrapper}>
      {isVisible && (
        <Modal isVisible={isVisible} toggleVisibility={toggleVisibility}>
          {recipeForRemoval && (
            <ModalContent
              recipeForRemoval={recipeForRemoval}
              toggleVisibility={toggleVisibility}
            />
          )}
        </Modal>
      )}
      <div className={classes.AddBtnBox}>
        <Link
          to='/form'
          className={classes.AddLink}
          onClick={() => recipesActions.setEditedRecipe(null)}
          data-testid='new-link-btn'
        >
          Add new
        </Link>
      </div>

      {!recipesState.recipes.length && (
        <p className={classes.Info} data-testid='info'>
          Sorry, lack of new recipes. Please click add button to add new recipe.
        </p>
      )}
      <div data-testid='recipes-container'>{recipesList}</div>
    </div>
  );
};

export default Recipes;
