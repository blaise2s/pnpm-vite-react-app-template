import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import { App } from './App';

test('renders TODO', async () => {
  const { getByText } = render(<App />);

  await expect.element(getByText('TODO')).toBeInTheDocument();
});
