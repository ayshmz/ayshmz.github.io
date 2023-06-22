import React from 'react';
import { render } from '@testing-library/react';
import { AboutMe, Experiences, Projects } from '../aboutme';

describe('aboutme', () => {
  it('should display info when rendering AboutMe', () => {
    const { getByText } = render(<AboutMe />);
    expect(
      getByText('full stack engineer who likes to solve problems', {
        exact: false,
      })
    ).toBeTruthy();
  });

  it('should display TypeAnimation when rendering AboutMe', () => {
    const { container } = render(<AboutMe />);
    expect(
      container.getElementsByClassName('index-module_type__E-SaG').length
    ).toBe(1);
  });

  it('should display Experiences', () => {
    const { getByText } = render(<Experiences />);
    expect(
      getByText('Senior Software Engineer', {
        exact: false,
      })
    ).toBeTruthy();
  });

  it('should display Projects', () => {
    const { getByText } = render(<Projects />);
    expect(
      getByText('C(h)at-GPT Chatbot React FrontEnd', { exact: false })
    ).toBeTruthy();
  });
});
