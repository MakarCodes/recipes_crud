import React, { useContext, useEffect } from 'react';
import { recipesContext } from '../../../contexts/recipesContext';

const Recipes = () => {
  const { recipesState, recipesActions } = useContext(recipesContext);

  useEffect(() => {
    console.log(recipesState);
  }, [recipesState]);
  return (
    <div>
      RECipes
      <button onClick={() => recipesActions.addRecipe('szpagetti', 'makaron')}>
        add
      </button>
    </div>
  );
};

export default Recipes;
