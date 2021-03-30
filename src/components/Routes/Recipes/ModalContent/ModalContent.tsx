import classes from './ModalContent.module.scss';

import Button from '../../../Resuable/Button/Button';
import { useContext } from 'react';
import { recipesContext } from '../../../../context/recipesContext';

interface IProps {
  recipeForRemoval: IRecipe;
  toggleVisibility: () => void;
}

const ModalContent: React.FC<IProps> = ({
  recipeForRemoval,
  toggleVisibility,
}) => {
  const { recipesActions } = useContext(recipesContext);
  const { removeRecipe, setRecipeToRemove } = recipesActions;

  const handleDelete = () => {
    removeRecipe(recipeForRemoval.id);
    toggleVisibility();
  };
  const handleCancelDelete = () => {
    toggleVisibility();
    setRecipeToRemove(null);
  };
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Delete</h2>
      <p className={classes.Question}>
        Do You want to delete recipe - {recipeForRemoval.name}?
      </p>
      <div style={{ textAlign: 'right' }}>
        <Button
          text='Delete'
          action={handleDelete}
          bgColor='#dc3545'
          testID='btn-delete'
        />
        <Button
          text='Cancel'
          action={handleCancelDelete}
          bgColor='grey'
          testID='btn-cancel'
        />
      </div>
    </div>
  );
};

export default ModalContent;