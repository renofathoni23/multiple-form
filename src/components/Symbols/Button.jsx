import React from "react";
import styled from "styled-components";
import FormContext from "../../store/FormContext";
import { useContext } from "react";

const ButtonContainer = styled.button`
  width: 100%;
  height: 60px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#ff8a00")};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const TextButton = styled.span`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
function Button({ title, isValid }) {
  const formCtx = useContext(FormContext);
  return (
    <ButtonContainer onClick={formCtx.onNext} disabled={!isValid}>
      <TextButton>{title}</TextButton>
    </ButtonContainer>
  );
}

export default Button;
