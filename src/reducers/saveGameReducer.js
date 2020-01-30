import { SAVE_GAME } from '../actions/actions';

const initialState = {
  saved: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state.saved, action.payload];
    default:
      return state;
  }
}
