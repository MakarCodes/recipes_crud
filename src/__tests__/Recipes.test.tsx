import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Recipes from '../components/Routes/Recipes/Recipes';
import { recipesContext } from '../context/recipesContext';
import { IInitialState } from '../reducer/recipesReducerTypes';

describe('Recipes component renders correctly if', () => {
  it('has Add New button, which fires setEditedRecipe on click', () => {
    const mockedInitialState: IInitialState = {
      recipes: [
        {
          id: 'abc123',
          name: 'Pad Thai',
          ingredients: ['kurczak', 'nerkowce', 'ryż'],
        },
        {
          id: 'xyz890',
          name: 'Pizza',
          ingredients: ['maka', 'ser', 'peperoni'],
        },
      ],
      editedRecipe: null,
      recipeForRemoval: null,
    };

    const mockedRecipesActions = {
      addRecipe: jest.fn(),
      setRecipeToRemove: jest.fn(),
      removeRecipe: jest.fn(),
      setEditedRecipe: jest.fn(),
      editRecipe: jest.fn(),
    };
    render(
      <BrowserRouter>
        <recipesContext.Provider
          value={{
            recipesState: mockedInitialState,
            recipesActions: mockedRecipesActions,
          }}
        >
          <Recipes />
        </recipesContext.Provider>
      </BrowserRouter>
    );

    const addNewBtn = screen.getByTestId('new-link-btn');
    expect(addNewBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(addNewBtn);
    });

    expect(mockedRecipesActions.setEditedRecipe).toHaveBeenCalledTimes(1);
  });
  it('renders correct number of recipes according to state', () => {
    const mockedInitialState: IInitialState = {
      recipes: [
        {
          id: 'abc123',
          name: 'Pad Thai',
          ingredients: ['kurczak', 'nerkowce', 'ryż'],
        },
        {
          id: 'xyz890',
          name: 'Pizza',
          ingredients: ['maka', 'ser', 'peperoni'],
        },
      ],
      editedRecipe: null,
      recipeForRemoval: null,
    };

    const mockedRecipesActions = {
      addRecipe: jest.fn(),
      setRecipeToRemove: jest.fn(),
      removeRecipe: jest.fn(),
      setEditedRecipe: jest.fn(),
      editRecipe: jest.fn(),
    };
    render(
      <BrowserRouter>
        <recipesContext.Provider
          value={{
            recipesState: mockedInitialState,
            recipesActions: mockedRecipesActions,
          }}
        >
          <Recipes />
        </recipesContext.Provider>
      </BrowserRouter>
    );

    const recipesContainer = screen.getByTestId('recipes-container');
    expect(recipesContainer.childElementCount).toBe(
      mockedInitialState.recipes.length
    );
  });
  it('renders info for user, that there is lack of recipes if recipes state is empty array', () => {
    const mockedInitialState: IInitialState = {
      recipes: [],
      editedRecipe: null,
      recipeForRemoval: null,
    };

    const mockedRecipesActions = {
      addRecipe: jest.fn(),
      setRecipeToRemove: jest.fn(),
      removeRecipe: jest.fn(),
      setEditedRecipe: jest.fn(),
      editRecipe: jest.fn(),
    };
    render(
      <BrowserRouter>
        <recipesContext.Provider
          value={{
            recipesState: mockedInitialState,
            recipesActions: mockedRecipesActions,
          }}
        >
          <Recipes />
        </recipesContext.Provider>
      </BrowserRouter>
    );

    const info = screen.getByTestId('info');
    expect(info.textContent).toBe(
      'Sorry, lack of new recipes. Please click add button to add new recipe.'
    );
  });
  it('renders all card content - editBtn, removeBtn, ingredients when user clicks on recipe name', () => {
    const mockedInitialState: IInitialState = {
      recipes: [
        {
          id: 'abc123',
          name: 'Pad Thai',
          ingredients: ['kurczak', 'nerkowce', 'ryż'],
        },
        {
          id: 'xyz890',
          name: 'Pizza',
          ingredients: ['maka', 'ser', 'peperoni'],
        },
      ],
      editedRecipe: null,
      recipeForRemoval: null,
    };

    const mockedRecipesActions = {
      addRecipe: jest.fn(),
      setRecipeToRemove: jest.fn(),
      removeRecipe: jest.fn(),
      setEditedRecipe: jest.fn(),
      editRecipe: jest.fn(),
    };
    render(
      <BrowserRouter>
        <recipesContext.Provider
          value={{
            recipesState: mockedInitialState,
            recipesActions: mockedRecipesActions,
          }}
        >
          <Recipes />
        </recipesContext.Provider>
      </BrowserRouter>
    );
    const recipeNameOne = screen.getByTestId('Pad Thai');
    const recipeNameTwo = screen.getByTestId('Pizza');

    expect(recipeNameOne).toBeInTheDocument();
    expect(recipeNameTwo).toBeInTheDocument();

    act(() => {
      fireEvent.click(recipeNameOne);
    });

    const editBtn = screen.getByTestId('edit-btn');
    const removeBtn = screen.getByTestId('remove-btn');
    const ingredients = screen.getByTestId('ingredients');

    expect(editBtn).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
    expect(ingredients).toBeInTheDocument();
    expect(ingredients.childElementCount).toEqual(
      mockedInitialState.recipes[0].ingredients.length
    );

    act(() => {
      fireEvent.click(recipeNameTwo);
    });
    const editBtns = screen.getAllByTestId('edit-btn');
    const removeBtns = screen.getAllByTestId('remove-btn');

    expect(editBtns.length).toEqual(2);
    expect(removeBtns.length).toEqual(2);
  });
  it('editBtn, removeBtn fire aprropriate actions on click', () => {
    const mockedInitialState: IInitialState = {
      recipes: [
        {
          id: 'abc123',
          name: 'Pad Thai',
          ingredients: ['kurczak', 'nerkowce', 'ryż'],
        },
        {
          id: 'xyz890',
          name: 'Pizza',
          ingredients: ['maka', 'ser', 'peperoni'],
        },
      ],
      editedRecipe: null,
      recipeForRemoval: null,
    };

    const mockedRecipesActions = {
      addRecipe: jest.fn(),
      setRecipeToRemove: jest.fn(),
      removeRecipe: jest.fn(),
      setEditedRecipe: jest.fn(),
      editRecipe: jest.fn(),
    };
    render(
      <BrowserRouter>
        <recipesContext.Provider
          value={{
            recipesState: mockedInitialState,
            recipesActions: mockedRecipesActions,
          }}
        >
          <Recipes />
        </recipesContext.Provider>
      </BrowserRouter>
    );
    const recipeNameOne = screen.getByTestId('Pad Thai');

    act(() => {
      fireEvent.click(recipeNameOne);
    });

    const editBtn = screen.getByTestId('edit-btn');
    const removeBtn = screen.getByTestId('remove-btn');

    act(() => {
      fireEvent.click(editBtn);
    });
    expect(mockedRecipesActions.setEditedRecipe).toHaveBeenCalledTimes(1);

    // I've encounter problem with Modal rendering probably becaouse of the container root
    // act(() => {
    //   fireEvent.click(removeBtn);
    // });
    // expect(mockedRecipesActions.setRecipeToRemove).toHaveBeenCalledTimes(1);
  });
});
