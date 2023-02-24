import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;
export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
`;
