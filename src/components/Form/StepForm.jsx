import React from "react";
import styled from "styled-components";
import FormContext from "../../store/FormContext";
import { useContext } from "react";
import { devices } from "../../utils/MediaQueries";

const StepFormContainer = styled.div`
  width: 500px;
  height: 70px;
  border-radius: 35px;
  background: #fffae6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateY(35px);
  @media ${devices.mobile} {
    width: 100%;
    height: 100%;
    transform: translateY(0px);
    margin-top: 20px;
  }
`;

const StepItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  @media ${devices.mobile} {
    column-gap: 1px;
  }
`;

const NumberStep = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.stepState >= props.step
      ? "rgba(255, 138, 0, 1)"
      : "rgba(255, 138, 0, 0.2)"};
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    color: ${(props) => (props.stepState >= props.step ? "#fff" : "#FF8A00")};
  }
`;

const LabelStep = styled.span`
  color: #ff8a00;
  font-size: 16px;
  font-weight: 500;
  @media ${devices.mobile} {
    display: none;
  }
`;

const Arrow = styled.div`
  color: #ff8a00;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: 0px 22px;
`;

function StepForm() {
  const formCtx = useContext(FormContext);
  let stepState = formCtx.step;
  return (
    <StepFormContainer>
      <StepItemContainer>
        <NumberStep step="1" stepState={stepState}>
          <div>1</div>
        </NumberStep>
        <LabelStep>Delivery</LabelStep>
        <Arrow>{">"}</Arrow>
        <NumberStep step="2" stepState={stepState}>
          <div>2</div>
        </NumberStep>
        <LabelStep>Payment</LabelStep>
        <Arrow>{">"}</Arrow>
        <NumberStep step="3" stepState={stepState}>
          <div>3</div>
        </NumberStep>
        <LabelStep>Finish</LabelStep>
      </StepItemContainer>
    </StepFormContainer>
  );
}

export default StepForm;
