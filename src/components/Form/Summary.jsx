import React from "react";
import styled from "styled-components";
import CostSection from "../Summary/CostSection";
import Button from "../Symbols/Button";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import FormContext from "../../store/FormContext";
import DeliverySection from "../Summary/DeliverySection";
import { devices } from "../../utils/MediaQueries";
import "@fontsource/montserrat/700.css";

const SummaryContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media ${devices.mobile} {
    width: 100%;
    flex-direction: column;
    background-color: #fff;
  }
`;

const ItemSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 80px 0px 0px 0px;
  @media ${devices.mobile} {
    padding: 0px;
  }
`;

const SummaryTitle = styled.span`
  color: #ff8a00;
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat";
  @media ${devices.mobile} {
    font-size: 22px;
  }
`;
const DividerSummary = styled.div`
  width: 1px;
  height: 460px;
  background-color: rgba(255, 138, 0, 0.2);
  @media ${devices.mobile} {
    display: none;
  }
`;

const InformationContainer = styled.div`
  padding: 0px 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    height: 100%;
    margin-top: 30px;
  }
`;

const ItemPurchasedText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  margin-top: 10px;
  margin-bottom: 21px;
  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const CostContainer = styled.div`
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
  @media ${devices.mobile} {
    font-size: 22px;
  }
`;

function Summary() {
  const {
    getValues,
    formState: { isValid },
  } = useFormContext();
  let isDropShipper = getValues("isDropshipper");

  const formCtx = useContext(FormContext);
  let shipment = formCtx.shipmentMethod;
  let payment = formCtx.paymentMethod;
  let step = formCtx.step;
  let cost = formCtx.cost;

  const renderTitleButton = () => {
    if (step === 1) {
      return <Button title={"Continue to Payment"} isValid={isValid}></Button>;
    } else if (step === 2) {
      if (
        Object.keys(shipment).length !== 0 &&
        Object.keys(payment).length !== 0
      ) {
        return (
          <Button
            title={`Pay with ${payment?.method}`}
            isValid={isValid}
          ></Button>
        );
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
