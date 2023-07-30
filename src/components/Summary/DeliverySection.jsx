import React from "react";
import styled from "styled-components";

const DividerDelivery = styled.div`
  height: 1px;
  width: 80px;
  background: #d8d8d8;
`;

const TitleMethod = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

const TitleMethodContainer = styled.div`
  margin: 21px 0px;
  display: flex;
  flex-direction: column;
`;

const TextMethod = styled.span`
  color: #1bd97b;
  font-size: 16px;
  font-weight: 500;
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
