import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '@store/slices/auth';
import { commonReducer } from '@store/slices/common';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});

export default rootReducer;
