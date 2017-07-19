import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: (ownProps.location.pathname === '/login')  ? "Login" : "Sign Up",

});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = (ownProps.location.pathname === '/login')  ? login : signup;
  return {
    processForm: (user) => (dispatch(formAction(user))),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
