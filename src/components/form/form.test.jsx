import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('form component', () => {
  it('renders Form as expected', () => {
    render(<Form />);
    const form = screen.getByTestId('form-test');
    expect(form).toBeInTheDocument();
  });
});
