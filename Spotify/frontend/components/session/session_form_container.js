import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.currentUser,
  formType: (ownProps.location.pathname === '/login')  ? login : signup
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => (dispatch(formType(user)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
