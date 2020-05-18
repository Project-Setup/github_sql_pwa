import { AnyAction } from '@reduxjs/toolkit';
import configureStore from './configureStore';

describe('configureStore', () => {
  const inheritedProperties = ['getState', 'dispatch', 'subscribe'];
  const extendedProperties = [
    'reducer',
    'addReducer',
    'removeReducers',
    'injectReducers',
    'substituteReducers',
  ];
  const expectedProperties = [...inheritedProperties, ...extendedProperties];

  const testReducer1 = (state = '', action: AnyAction) => {
    switch (action.type) {
      case 'updateState1': {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  const testReducer2 = (
    state: { counter: number } = { counter: 0 },
    action: AnyAction
  ) => {
    switch (action.type) {
      case 'incrementState2': {
        return { counter: state.counter + action.payload };
      }
      default: {
        return state;
      }
    }
  };

  test('should create a store without error', () => {
    const store = configureStore({ reducer: {} });

    expectedProperties.forEach((property) => {
      expect(store).toHaveProperty(property);
    });
    expect(store.reducer).toEqual({});
    expect(store.getState()).toEqual({});
  });

  test('should accept reducer map objects without error', () => {
    const store = configureStore({
      reducer: {
        testReducer1,
        testReducer2,
      },
    });
    expectedProperties.forEach((property) => {
      expect(store).toHaveProperty(property);
    });
    expect(store.reducer).toEqual({
      testReducer1,
      testReducer2,
    });
    expect(store.getState()).toEqual({
      testReducer1: '',
      testReducer2: { counter: 0 },
    });

    store.dispatch({ type: 'updateState1', payload: 'testing' });
    expect(store.getState()).toEqual({
      testReducer1: 'testing',
      testReducer2: { counter: 0 },
    });
    store.dispatch({ type: 'incrementState2', payload: 3 });
    expect(store.getState()).toEqual({
      testReducer1: 'testing',
      testReducer2: { counter: 3 },
    });
  });

  describe('store.addReducer', () => {
    test('should be able to add a reducer', () => {
      const store = configureStore({
        reducer: { testReducer1 },
      });
      store.dispatch({ type: 'updateState1', payload: 'testing' });
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
      });
      store.addReducer('testReducer2', testReducer2);
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });

      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 0 },
      });

      store.dispatch({ type: 'incrementState2', payload: 3 });
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 3 },
      });

      store.dispatch({ type: 'updateState1', payload: 'testing2' });
      expect(store.getState()).toEqual({
        testReducer1: 'testing2',
        testReducer2: { counter: 3 },
      });
    });
  });

  describe('store.removeReducers', () => {
    test('should be able to remove an existing reducer', () => {
      const store = configureStore({
        reducer: {
          testReducer1,
          testReducer2,
        },
      });
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });
      expect(store.getState()).toEqual({
        testReducer1: '',
        testReducer2: { counter: 0 },
      });

      store.removeReducers(['testReducer1']);
      expect(store.reducer).toEqual({ testReducer2 });

      expect(store.getState()).toEqual({
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'incrementState2', payload: 2 }));
      expect(store.getState()).toEqual({
        testReducer2: { counter: 2 },
      });
    });

    test('should maintian the same reducers if remove a non-existing reducer', () => {
      const store = configureStore({
        reducer: {
          testReducer1,
          testReducer2,
        },
      });
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });
      expect(store.getState()).toEqual({
        testReducer1: '',
        testReducer2: { counter: 0 },
      });

      store.removeReducers(['testReducer3']);
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });

      expect(store.getState()).toEqual({
        testReducer1: '',
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'incrementState2', payload: 2 }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 2 },
      });
    });
  });

  describe('store.injectReducers', () => {
    test('should be able to inject reducers', () => {
      const store = configureStore({ reducer: {} });
      expect(store.reducer).toEqual({});
      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({});

      store.injectReducers({ testReducer1, testReducer2 });
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });
      expect(store.getState()).toEqual({
        testReducer1: '',
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'incrementState2', payload: 2 }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: { counter: 2 },
      });
    });
  });

  describe('store.substituteReducers', () => {
    test('should be able to substitute a reducer', () => {
      const store = configureStore({ reducer: { testReducer1 } });
      expect(store.reducer).toEqual({ testReducer1 });
      expect(store.getState()).toEqual({
        testReducer1: '',
      });

      store.substituteReducers({ testReducer2 });
      expect(store.reducer).toEqual({ testReducer2 });
      expect(store.getState()).toEqual({
        testReducer2: {
          counter: 0,
        },
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'incrementState2', payload: 2 }));
      expect(store.getState()).toEqual({
        testReducer2: { counter: 2 },
      });
    });

    test('should keep the existing state if the subtituted reducers include existing reducers', () => {
      const store = configureStore({ reducer: { testReducer1 } });
      expect(store.reducer).toEqual({ testReducer1 });
      expect(store.getState()).toEqual({
        testReducer1: '',
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing' }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
      });

      store.substituteReducers({ testReducer1, testReducer2 });
      expect(store.reducer).toEqual({ testReducer1, testReducer2 });
      expect(store.getState()).toEqual({
        testReducer1: 'testing',
        testReducer2: {
          counter: 0,
        },
      });

      expect(store.dispatch({ type: 'updateState1', payload: 'testing2' }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing2',
        testReducer2: { counter: 0 },
      });

      expect(store.dispatch({ type: 'incrementState2', payload: 2 }));
      expect(store.getState()).toEqual({
        testReducer1: 'testing2',
        testReducer2: { counter: 2 },
      });
    });
  });
});
