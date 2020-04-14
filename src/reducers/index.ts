import { combineReducers } from '@reduxjs/toolkit';
import count from '../features/count/countSlice';

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
