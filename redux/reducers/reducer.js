import { combineReducers } from 'redux';

import dashboardReducer from './dashboard.reducer';
import callReducer from './call.reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  call: callReducer
});
