import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
}
const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, defaultState, { currentUser })

    case RECEIVE_ERRORS:
      let errors = action.errors;
      return Object.assign({}, state, { errors })

    case CLEAR_ERRORS:
      errors = [];
      return Object.assign({}, state, { errors })

    default:
      return state;
  }
}

export default SessionReducer;
