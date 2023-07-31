import React from "react";
import styled from "styled-components";
import check from "../../assets/check.png";
import { devices } from "../../utils/MediaQueries";

const RadioButtonContainer = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  flex-direction: row;
  border: ${(props) =>
    props.isActive ? "2px solid #1BD97B" : "1px solid #ccc"};
  background: ${(props) =>
    props.isActive ? "rgba(27, 217, 123, 0.10)" : "#fff"};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media ${devices.mobile} {
    width: 130px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  margin-left: 15px;
`;

const TitleMethod = styled.span`
  color: #000;
  font-size: 13px;
  font-weight: 500;
  opacity: ${(props) => (props.isActive ? 0.8 : 0.6)};
`;

const CostMethod = styled.span`
  color: #2d2a40;
  font-size: 16px;
  font-weight: 700;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
`;

const CheckImage = styled.img.attrs({
  src: check,
})`
  margin-right: 15px;
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
`;
function RadioButton({ type, method, amount, isActive }) {
  return (
    <RadioButtonContainer isActive={isActive}>
      <TextContainer>
        <TitleMethod isActive={isActive} type={type}>
          {method}
        </TitleMethod>
        <CostMethod isActive={isActive}>{amount}</CostMethod>
      </TextContainer>
      <CheckImage isActive={isActive}></CheckImage>
    </RadioButtonContainer>
  );
}

export default RadioButton;
