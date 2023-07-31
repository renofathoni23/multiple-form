import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/MediaQueries";

const DividerDelivery = styled.div`
  height: 1px;
  width: 80px;
  background: #d8d8d8;
`;

const TitleMethod = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const TitleMethodContainer = styled.div`
  margin: 21px 0px;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    margin: 16px 0px;
  }
`;

const TextMethod = styled.span`
  color: #1bd97b;
  font-size: 16px;
  font-weight: 500;
  @media ${devices.mobile} {
    font-size: 14px;
  }
`;
function DeliverySection({ title, method }) {
  return (
    <>
      <DividerDelivery></DividerDelivery>
      <TitleMethodContainer>
        <TitleMethod>{title}</TitleMethod>
        <TextMethod>{method}</TextMethod>
      </TitleMethodContainer>
    </>
  );
}

export default DeliverySection;
