import { createStore } from 'redux';

const initialState = {
  count: {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
  },
  face: '',
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state.count, coffees: state.count.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.count.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.count.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.count.studies + 1 };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
