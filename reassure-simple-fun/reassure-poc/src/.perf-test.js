
import * as React from 'react';
import {measurePerformance} from 'reassure';

const AsyncComponent = () => {
  const [count, setCount] = React.useState(0);
  const handlePress = () => {
    setTimeout(() => setCount((c) => c + 1), 10);
  };
  return (
    <div>
      <button onClick={handlePress}>Action</button>
      <span>Count: {count}</span>
    </div>
  );
};

test('Simple test', async () => {
  await measurePerformance(<AsyncComponent/>);
});