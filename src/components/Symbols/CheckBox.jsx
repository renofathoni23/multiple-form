import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import FormContext from "../../store/FormContext";
import { useFormContext } from "react-hook-form";

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

const CheckBoxLabel = styled.span`
  color: #2d2a40;
  font-size: 14px;
  font-weight: 500;
`;

function CheckBox({ register, name, ...props }) {
  const formCtx = useContext(FormContext);
  const { setValue } = useFormContext();
  const handleCheckBoxChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setValue("isDropshipper", true);
      formCtx.changeCost(formCtx.cost + 5900);
    } else {
      setValue("isDropshipper", false);
      formCtx.changeCost(formCtx.cost - 5900);
    }
  };
  return (
    <CheckBoxContainer>
      <CheckBoxInput
        {...register(name)}
        onChange={handleCheckBoxChange}
      ></CheckBoxInput>
      <CheckBoxLabel>{props.label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
}

export default CheckBox;
