import React from "react";
import styled from "styled-components";

const CostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const CostLabel = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
`;

const CostText = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;

function CostSection({ title, cost }) {
  return (
    <CostContainer>
      <CostLabel>{title}</CostLabel>
      <CostText>{cost}</CostText>
    </CostContainer>
  );
}

export default CostSection;
