import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/auth-thunk';
import { Form, Label, Input, Button } from './LoginForm.styled';

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
    <Form onSubmit={handleSubmit}>
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Пароль:
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Увійти</Button>
      <Link to="/register">Are you not registered yet? Then click here! </Link>
    </Form>
  );
}

export default LoginForm;
