import React from 'react';
import { render } from '@testing-library/react';
import AboutMe from '../AboutMe';

describe('AboutMe', () => {
  it('should load page on render', () => {
    const { getByText } = render(<AboutMe />);
    expect(getByText('Hello! Welcome to my page!')).toBeTruthy();
  });
});
