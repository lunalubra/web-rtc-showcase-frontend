import * as dashboardActions from '../actions/dashboard.actions';

const initState = {
  username: '',
  activeUsers: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case dashboardActions.DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case dashboardActions.DASHBOARD_SET_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.activeUsers
      };
    default:
      return state;
  }
};

export default reducer;
