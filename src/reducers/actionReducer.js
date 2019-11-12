import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/actions';

const initialState = {
  count: {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
  },
  face: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, count: { ...state.count, coffees: state.count.coffees + 1 } };
    case EAT_SNACK:
      return { ...state, count: { ...state.count, snacks: state.count.snacks + 1 } };
    case TAKE_NAP:
      return { ...state, count: { ...state.count,  naps: state.count.naps + 1 } };
    case STUDY:
      return { ...state, count: { ...state.count, studies: state.count.studies + 1 } };
    default:
      return state;
  }
}