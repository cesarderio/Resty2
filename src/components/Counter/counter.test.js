import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';

import Counter from './index';

describe('Counter test', () => {
  it('counts as expected', () => {
    render(<Counter />);

    const button = screen.getByTestId('counter-button');
    const clicks = screen.getByTestId('counter-clicks');
    const factors = screen.getByTestId('counter-factor');

    fireEvent.click(button);

    expect(clicks).toHaveTextContent(1);
    expect(factors).toHaveTextContent('false');
  })
  test('renders factorOfFive as expected', () => {
    render(<Counter />);

    const button = screen.getByTestId('counter-button');
    const clicks = screen.getByTestId('counter-clicks');
    const factors = screen.getByTestId('counter-factor');


    for(let i = 1; i < 30; i++){

      fireEvent.click(button);
      expect(clicks).toHaveTextContent(`Button has been clicked @{i} times`);

      let expected = i % 5 === 0 ? 'true' : 'false';
      expect(factors).toHaveTextContent(expected);
    }
  })
})
