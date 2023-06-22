import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ExperienceItem } from '../experienceItem';

describe('experienceItem', () => {
  it.each`
    end       | expectedYear     | scenario
    ${'2023'} | ${'2019 ~ 2023'} | ${'all information is provided'}
    ${null}   | ${'2019'}        | ${'end year is missing'}
  `(
    'should display the year, role and company when $scenario',
    ({ end, expectedYear }) => {
      const { getByText } = render(
        <ExperienceItem
          start='2019'
          end={end}
          role='Software Engineer'
          employer='Somewhere'
          description='short description'
          tech='javascript, typescript'
        />
      );
      expect(getByText(expectedYear, { exact: false })).toBeTruthy();
      expect(getByText('Software Engineer', { exact: false })).toBeTruthy();
      expect(getByText('Somewhere', { exact: false })).toBeTruthy();
    }
  );

  it('should display the description after role click', () => {
    const { getByText, queryByText } = render(
      <ExperienceItem
        start='2019'
        end='2023'
        role='Software Engineer'
        employer='Somewhere'
        description='short description'
        tech='javascript, typescript'
      />
    );
    expect(queryByText('short description')).toBeNull();

    const role = getByText('Software Engineer');
    fireEvent.click(role);
    expect(getByText('short description', { exact: false })).toBeTruthy();
  });

  it('should display the tooltip on hover', async () => {
    const { getByText, queryByText } = render(
      <ExperienceItem
        start='2019'
        end='2023'
        role='Software Engineer'
        employer='Somewhere'
        description='short description'
        tech='javascript, typescript'
      />
    );
    expect(queryByText('javascript, typescript')).toBeNull();
    fireEvent.mouseOver(getByText('Software Engineer'));

    await waitFor(() => getByText('javascript, typescript'));
    expect(getByText('javascript, typescript')).toBeTruthy();
  });
});
