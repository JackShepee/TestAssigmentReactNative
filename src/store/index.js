import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import photosReducer from './reducers/photos';

const rootReducer = {
  photos: photosReducer,
};

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
