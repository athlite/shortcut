
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library'
import App from './app';
import {createTopic} from './api';
jest.mock('./api');

createTopic.mockResolvedValue({
  message: 'ok'
});

describe('App Component', () => {
  
  test('should render element', async () => {
    
    const client = {
      connect: jest.fn(),
      disconnect: jest.fn(),
      subscribe: jest.fn((path, fn) => {
        fn({
          id: '1',
          text: 'Hello First Tweet',
          user: {
            name: 'John Doe'
          }
        })
      }),
      unsubscribe: jest.fn()
    };
    
    const app = render(<App client={client} />);
    
    expect(client.connect).toHaveBeenCalled();

    const input = app.queryByLabelText('Search:');
    fireEvent.keyUp(input, { key: 'Enter', target: { value: 'javascript'}});

    expect(createTopic).toHaveBeenCalled();

    await wait(() => {
      expect(client.subscribe).toHaveBeenCalled();
    });
    
    expect( app.queryByText('Hello First Tweet') ).toBeTruthy();
  });
});
