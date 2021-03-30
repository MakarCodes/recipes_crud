import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';
import { useHistory } from 'react-router';

import classes from './Form.module.scss';
import { recipesContext } from '../../../context/recipesContext';

interface IDataFromForm {
  name: string;
  ingredients: string;
}

const Form = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);
  const { editedRecipe } = recipesState;
  const { addRecipe, editRecipe } = recipesActions;
  const history = useHistory();
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const resetForm = () => {
    setValue('name', '');
    setValue('ingredients', '');
    history.push('/');
  };
  const onSubmit = (data: IDataFromForm) => {
    const { name, ingredients } = data;
    const ingredeintsArray = ingredients.split(',');
    if (editedRecipe) {
      const recipeAfterEdit = {
        ...editedRecipe,
        name,
        ingredients: ingredeintsArray,
      };
      editRecipe(recipeAfterEdit);
    } else {
      addRecipe(name, ingredients);
    }
    resetForm();
  };

  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.Title}>Your new recipe</h2>
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Recipe name:</label>
          <input
            className={classes.Input}
            ref={register}
            name='name'
            type='text'
            defaultValue={editedRecipe ? editedRecipe.name : ''}
            placeholder='Recipe name'
          />
          {errors.name && (
            <p className={classes.ErrorField}>{errors.name?.message}</p>
          )}
        </div>
        <div className={classes.InputGroup}>
          <label className={classes.LabelRequired}>Ingredients:</label>
          <input
            className={classes.Input}
            ref={register}
            name='ingredients'
            type='text'
            defaultValue={editedRecipe ? editedRecipe.ingredients.join() : ''}
            placeholder='Enter Ingredients,Separated,By Comma'
          />
          {errors.ingredients && (
            <p className={classes.ErrorField}>{errors.ingredients?.message}</p>
          )}
        </div>
        <div className={classes.ButtonsContainer}>
          <button
            type='button'
            onClick={() => resetForm()}
            className={`${classes.Btn} ${classes.Cancel}`}
          >
            Cancel
          </button>
          <button type='submit' className={classes.Btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
