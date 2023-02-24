import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
`;

export const Label = styled.label`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
`;
