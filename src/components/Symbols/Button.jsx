import React from "react";
import styled from "styled-components";
import FormContext from "../../store/FormContext";
import { useContext } from "react";

const ButtonContainer = styled.button`
  width: 100%;
  height: 60px;
  background-color: #ff8a00;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const TextButton = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
function Button({ title }) {
  const formCtx = useContext(FormContext);
  console.log(formCtx.onBack);
  return (
    <ButtonContainer onClick={formCtx.onNext}>
      <TextButton>{title}</TextButton>
    </ButtonContainer>
  );
}

export default Button;
