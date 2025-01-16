### CSS Tests

```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('[CSS-TEST] h1 has underline class', () => {
  render(<App />);
  const h1Element = screen.getByText(/Hello world from tailwind!/i);

  // checking all CSS
  expect(h1Element).toHaveClass('underline');
  expect(h1Element).toHaveClass('text-3xl');
  expect(h1Element).toHaveClass('font-bold');
});
```

### Results

```bash
./run-tests.sh
```

```
 PASS  src/App.test.js
  ✓ renders learn react link (51 ms)
  ✓ [CSS-TEST] h1 has underline class (10 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.974 s, estimated 2 s
Ran all test suites.
```


