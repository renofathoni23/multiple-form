import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/MediaQueries";

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
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const CostText = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  @media ${devices.mobile} {
    font-size: 12px;
  }
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
