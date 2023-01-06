
import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import Results from './index';

describe('Results Component', () => {
  test('renders results as expected', () => {
    const data = {
      name: 'Raphael',
      method: 'get',
      url: 'wickedResty.com',
    };
    render(<Results data={data}/>);
    const result = screen.getByTestId('result-data')

    expect(result).toBeInTheDocument();

  });
});
