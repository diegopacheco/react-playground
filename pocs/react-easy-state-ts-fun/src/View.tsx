import { store, view } from '@risingstack/react-easy-state';

const counter = store({
  num: 0,
  increment: () => counter.num++
});

const user = store({ name: 'Bob' });

export default view(() => (
  <>
  <p>Click Counter: </p><button onClick={counter.increment}>{counter.num}</button>
  <br/>
  <br/>
  <div>
    <input
      value={user.name}
      onChange={ev => (user.name = ev.target.value)}
    />
    <div>Hello {user.name}!</div>
  </div>
  </>
));