import React, { useEffect } from "react";
import styled from "styled-components";
import CostSection from "../Summary/CostSection";
import Button from "../Symbols/Button";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import FormContext from "../../store/FormContext";
import DeliverySection from "../Summary/DeliverySection";

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

const SummaryTitle = styled.span`
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
  display: flex;
  flex-direction: column;
`;

const ItemPurchasedText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  margin-top: 10px;
  margin-bottom: 21px;
`;

const CostContainer = styled.div`
  /* margin-top: 88px; */
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

const CostText = styled.span`
  color: #ff8a00;
  font-size: 24px;
  font-weight: 700;
`;

function Summary() {
  const { getValues } = useFormContext();
  let isDropShipper = getValues("isDropshipper");

  const formCtx = useContext(FormContext);
  let shipment = formCtx.shipmentMethod;
  let payment = formCtx.paymentMethod;
  let step = formCtx.step;
  let cost = formCtx.cost;

  const renderTitleButton = () => {
    if (step === 1) {
      return <Button title={"Continue to Payment"}></Button>;
    } else if (step === 2) {
      if (
        Object.keys(shipment).length !== 0 &&
        Object.keys(payment).length !== 0
      ) {
        return <Button title={`Pay with ${payment?.method}`}></Button>;
      }
    }
  };

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
          {Object.keys(shipment).length !== 0 && (
            <DeliverySection
              title={"Delivery estimation"}
              method={`${shipment?.estimate} by ${shipment?.method}`}
            ></DeliverySection>
          )}
          {Object.keys(payment).length !== 0 && (
            <DeliverySection
              title={"Payment Method"}
              method={payment?.method}
            ></DeliverySection>
          )}
          <CostContainer>
            {/* <CostSection></CostSection> */}
            <CostSection title={"Cost of goods"} cost={"500,000"}></CostSection>
            {isDropShipper && (
              <CostSection
                title={"Dropshipping Fee"}
                cost={"5,900"}
              ></CostSection>
            )}
            {Object.keys(shipment).length !== 0 && (
              <CostSection
                title={`${shipment?.method} shipment`}
                cost={shipment?.amount.toLocaleString()}
              ></CostSection>
            )}
          </CostContainer>
          <TotalCostContainer>
            <CostText>Total</CostText>
            <CostText>{cost.toLocaleString()}</CostText>
          </TotalCostContainer>
          {step < 3 && renderTitleButton()}
        </InformationContainer>
      </ItemSummaryContainer>
    </SummaryContainer>
  );
}

export default Summary;
