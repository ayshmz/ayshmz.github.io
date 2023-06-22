import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatBox } from '../chatbox';
import { getCatGPTResponse } from '../../utils/api';

jest.mock('../../utils/api', () => ({
  getCatGPTResponse: jest.fn().mockReturnValue([]),
  saveCatGPTResponse: jest
    .fn()
    .mockReturnValue([{ content: 'Hello!', role: 'assistant' }]),
}));

describe('ChatBox', () => {
  it('should display the chatbox', () => {
    const spy = jest.fn();
    const { getByText } = render(
      <ChatBox textValue='Hello' setShowChat={spy} />
    );
    expect(
      getByText('*This interaction may be used as part of another project', {
        exact: false,
      })
    );
  });

  it('should not display the instruction message when there is an id', async () => {
    const spy = jest.fn();
    let windowSpy = jest.fn();
    global.window.sessionStorage.getItem = windowSpy.mockReturnValue('123');
    const { queryByText } = render(<ChatBox textValue='' setShowChat={spy} />);
    expect(queryByText('Write something to get started!')).toBe(null);
  });

  it('should not display the instruction message when there is an id', async () => {
    const spy = jest.fn();
    let windowSpy = jest.fn();
    global.window.sessionStorage.getItem = windowSpy.mockReturnValue('123');
    getCatGPTResponse.mockReturnValue([
      { content: 'Hello!', role: 'assistant' },
    ]);
    const { queryByText } = render(<ChatBox textValue='' setShowChat={spy} />);
    expect(queryByText('Write something to get started!')).toBe(null);
  });

  it('should not display the instruction message when there is an id', async () => {
    const spy = jest.fn();
    let windowSpy = jest.fn();
    global.window.sessionStorage.getItem = windowSpy.mockReturnValue('123');
    getCatGPTResponse.mockReturnValue([
      { content: 'Hello!', role: 'assistant' },
    ]);
    const { queryByLabelText } = render(
      <ChatBox textValue='' setShowChat={spy} />
    );
    const inputField = queryByLabelText('chat-input');
    userEvent.type(inputField, 'Hello!');
    expect(inputField.children[0].value).toBe('Hello!');
  });
});
