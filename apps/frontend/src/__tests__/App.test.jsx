import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';

beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
  );
});

afterAll(() => {
  global.fetch = undefined;
});

test('renders heading and calls fetch', async () => {
  render(<App />);

  expect(screen.getByText(/CI\/CD Training App/i)).toBeInTheDocument();

  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
});
