import { createStore } from '@xstate/store';

interface MyContext {
  count: number;
  name: string;
}

type MyEvents =
  | { type: 'inc' }
  | { type: 'add'; num: number }
  | { type: 'changeName'; newName: string };

  const store = createStore({
    context: {
      count: 0,
      name: 'David',
    },
    on: {
      inc: {
        count: (context:MyContext) => context.count + 1,
      },
      add: {
        count: (context:MyContext, event: { num: number }) => context.count + event.num,
      },
      changeName: {
        name: (context:MyContext, event: { newName: string }) => event.newName,
      },
    },
  });
  
  export default store;