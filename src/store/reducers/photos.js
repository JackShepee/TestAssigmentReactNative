import {FETCH_PHOTOS} from '../actions/photos';

const initialState = [];

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload;
    default:
      return state;
  }
}
