
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  test('renders h1 as expected', () => {
    render(<Header greeting="Tester"/>);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('Hello Tester');

    // another way to do this:
    let anotherH1Example = screen.getByText('Hello Tester');
    expect(anotherH1Example).toBeTruthy();
    expect(anotherH1Example).toBeInTheDocument();
  });
});
