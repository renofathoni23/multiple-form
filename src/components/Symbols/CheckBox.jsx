import React from "react";
import styled from "styled-components";

const CheckBoxInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
  accent-color: #1bd97b;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

const CheckBoxLabel = styled.div`
  color: #2d2a40;
  font-size: 14px;
  font-weight: 500;
`;

function CheckBox({ register, name, ...props }) {
  return (
    <CheckBoxContainer>
      <CheckBoxInput {...register(name)}></CheckBoxInput>
      <CheckBoxLabel>{props.label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
}

export default CheckBox;
