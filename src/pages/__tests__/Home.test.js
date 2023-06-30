import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home/index.jsx';

jest.mock('../../components/cats');
jest.mock('../../components/experienceTooltip');

describe('Home', () => {
  it('should load page on render', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Projects & Blog Posts:')).toBeTruthy();
  });
});
