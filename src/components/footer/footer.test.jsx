
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders Footer as expected', () => {
    render(<Footer />);
  });
});
