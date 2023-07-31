import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import FormContext from "../../store/FormContext";
import { useFormContext } from "react-hook-form";
import { devices } from "../../utils/MediaQueries";
import "@fontsource/inter/500.css";

const CheckBoxInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
  accent-color: #1bd97b;
  @media ${devices.mobile} {
    width: 12px;
    height: 12px;
  }
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
  font-family: "Inter";
  opacity: 0.8;
  @media ${devices.mobile} {
    font-size: 12px;
  }
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
