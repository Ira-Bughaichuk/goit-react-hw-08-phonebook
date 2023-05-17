import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-thunk';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import scss from '../../style/baseForm.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};
function AuthReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'name':
      return { ...state, name: payload };
    case 'email':
      return { ...state, email: payload };
    case 'password':
      return { ...state, password: payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [state, dispatchChange] = useReducer(AuthReducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatchChange({ type: name, payload: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(state));
    dispatchChange({ type: 'reset' });
  };

  const { name, email, password } = state;

  return (
    <section>
      <div className={scss.wrapperForm}>
        <h2 className={scss.title}>Registration</h2>
        <form onSubmit={handleSubmit} className={scss.contentForm}>
          <div className={scss.contentForm__box}>
            <PersonIcon fontSize="medium" className={scss.icon} />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className={scss.input}
            />
            <label className={scss.label}>Username</label>
          </div>
          <div className={scss.contentForm__box}>
            <EmailIcon fontSize="medium" className={scss.icon} />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Invalid email address"
              className={scss.input}
            />
            <label className={scss.label}>Email</label>
          </div>
          <div className={scss.contentForm__box}>
            <LockIcon fontSize="medium" className={scss.icon} />
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              minLength="7"
              maxLength="12"
              title="Please enter at least 5 characters"
              className={scss.input}
            />
            <label className={scss.label}>Password</label>
          </div>

          <button type="submit" className={scss.button}>
            Register
          </button>
          <div className={scss.loginRegister}>
            <p className={scss.loginRegister__text}>
              Do you already an account?
            </p>
            <Link to="/login" className={scss.loginRegister__link}>
              Then click here!
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
