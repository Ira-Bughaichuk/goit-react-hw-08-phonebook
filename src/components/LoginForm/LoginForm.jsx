import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/auth-thunk';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import scss from '../../style/baseForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

function loginReducer(state, action) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function LoginForm() {
  const dispatch = useDispatch();
  const [state, dispatchChange] = useReducer(loginReducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatchChange({ type: name, payload: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(state));
    dispatchChange({ type: 'reset' });
  };

  const { email, password } = state;

  return (
    <section className={scss.section}>
      <div className={scss.wrapperForm}>
        <h2 className={scss.title}>Login</h2>
        <form onSubmit={handleSubmit} className={scss.contentForm}>
          <div className={scss.contentForm__box}>
            <EmailIcon fontSize="medium" className={scss.icon} />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={scss.input}
            />
            <label className={scss.label}>Email</label>
          </div>
          <div className={scss.contentForm__box}>
            <LockIcon fontSize="medium" className={scss.icon} />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={scss.input}
            />
            <label className={scss.label}>Password</label>
          </div>
          <button type="submit" className={scss.button}>
            Sign In
          </button>
          <div className={scss.loginRegister}>
            <p className={scss.loginRegister__text}>
              Are you not registered yet?
            </p>
            <Link to="/register" className={scss.loginRegister__link}>
              Then click here!
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
