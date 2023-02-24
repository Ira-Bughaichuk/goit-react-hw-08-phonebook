import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/auth-thunk';
import { Form, InputContainer, Input, Button } from './RegisterForm.styled';
import { Link } from './../AuthNav/AuthNav.styled';

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
    console.log(state);
    dispatch(registerThunk(state));
    dispatchChange({ type: 'reset' });
  };

  const { name, email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        Ім'я користувача:
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </InputContainer>
      <InputContainer>
        Email:
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer>
        Пароль:
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </InputContainer>
      <Button type="submit">Зареєструватися</Button>
      <Link to="/login">Do you already an account? Then click here! </Link>
    </Form>
  );
};

export default RegisterForm;
