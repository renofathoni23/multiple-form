import React from "react";
import styled from "styled-components";
import CostSection from "../Summary/CostSection";
import Button from "../Symbols/Button";
import { useFormContext } from "react-hook-form";

const SummaryContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ItemSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 80px 0px 0px 0px;
`;

const SummaryTitle = styled.div`
  color: #ff8a00;
  font-size: 24px;
  font-weight: 700;
`;
const DividerSummary = styled.div`
  width: 1px;
  height: 460px;
  background-color: rgba(255, 138, 0, 0.2);
`;

const InformationContainer = styled.div`
  padding: 0px 20px 20px;
  width: 100%;
`;

const ItemPurchasedText = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  margin-top: 10px;
  margin-bottom: 21px;
`;

const CostContainer = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
`;

//Total Cost
const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const CostText = styled.div`
  color: #ff8a00;
  font-size: 24px;
  font-weight: 700;
`;

function Summary() {
  const { getValues } = useFormContext();
  let isDropShipper = getValues("isDropshipper");

  return (
    <SummaryContainer>
      <ItemSummaryContainer>
        <DividerSummary></DividerSummary>
        <InformationContainer>
          <SummaryTitle>Summary</SummaryTitle>
          <ItemPurchasedText>10 items purchased</ItemPurchasedText>
          {/* <DeliverySection
            title={"Delivery estimation"}
            method={"today by GO-SEND"}
          ></DeliverySection> */}
          {/* <DeliverySection
            title={"Payment"}
            method={"Bank Transfer"}
          ></DeliverySection> */}
          <CostContainer>
            {/* <CostSection></CostSection> */}
            <CostSection title={"Cost of goods"} cost={"500,000"}></CostSection>
            {isDropShipper && (
              <CostSection
                title={"Dropshipping Fee"}
                cost={"5000"}
              ></CostSection>
            )}
          </CostContainer>
          <TotalCostContainer>
            <CostText>Total</CostText>
            <CostText>505,900</CostText>
          </TotalCostContainer>
          <Button title={"Continue to Payment"}></Button>
        </InformationContainer>
      </ItemSummaryContainer>
    </SummaryContainer>
  );
}

export default Summary;
