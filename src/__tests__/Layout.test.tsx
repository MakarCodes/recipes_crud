import { render, screen } from '@testing-library/react';

import Layout from '../components/Layout/Layout';

describe('Layout is rendering correctly if', () => {
  it('renders title on screen', () => {
    render(<Layout />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    // expect(title.innerHTML.includes('Best Recipes')).toBeTruthy();
    expect(title.textContent).toBe('Best Recipes');

    const wrapper = screen.getByTestId('inner-layout-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
