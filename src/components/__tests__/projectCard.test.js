import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProjectCard } from '../projectCard';

describe('projectCard', () => {
  it('should display projects when given info', () => {
    const { getByText } = render(
      <ProjectCard
        title='Some title'
        image='/path'
        description='some description'
        link='/somelink'
      />
    );
    expect(getByText('Some title')).toBeTruthy();
    expect(getByText('some description')).toBeTruthy();
  });

  it('should open a new window when icon button is clicked', () => {
    let windowSpy = jest.fn();
    global.window.open = windowSpy;

    const { getByLabelText } = render(
      <ProjectCard
        title='Some title'
        image='/path'
        description='some description'
        link='/somelink'
      />
    );
    const button = getByLabelText('github link');
    fireEvent.click(button);
    expect(windowSpy).toHaveBeenCalledTimes(1);
    expect(windowSpy).toHaveBeenCalledWith('/somelink');
  });
});
