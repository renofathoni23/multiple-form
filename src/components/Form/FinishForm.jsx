import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../Symbols/Heading";
import FormContext from "../../store/FormContext";
import { useContext } from "react";
import arrow from "../../assets/arrow_back.png";
import { useFormContext } from "react-hook-form";
import { devices } from "../../utils/MediaQueries";

const FinishFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterFormContainer = styled.div`
  width: 50%;
  height: 50%;
  @media ${devices.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const OrderText = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  @media ${devices.mobile} {
    text-align: center;
  }
`;

const ShipmentInformationText = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
  margin-top: 9px;
  @media ${devices.mobile} {
    text-align: center;
  }
`;

const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 24px;
  margin-top: 60px;
  @media ${devices.mobile} {
    justify-content: center;
    margin-top: 30px;
  }
`;

const BackButtonTitle = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
`;
function FinishForm() {
  const formCtx = useContext(FormContext);
  let dayShipment = formCtx.shipmentMethod?.estimate;
  let methodShipment = formCtx.shipmentMethod?.method;
  const [orderId, setOrderId] = useState();

  const { reset } = useFormContext();

  const onReset = () => {
    formCtx.resetStep();
    formCtx.onChangePayment({});
    formCtx.onChangeShipment({});
    reset();
  };

  const generateOrderId = () => {
    const characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let orderId = "";
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters.charAt(randomIndex);
    }
    setOrderId(orderId);
  };

  useEffect(() => {
    generateOrderId();
  }, []);
  return (
    <FinishFormContainer>
      <CenterFormContainer>
        <Heading title="Thank You"></Heading>
        <OrderText>Order ID: {orderId}</OrderText>
        <ShipmentInformationText>
          Your Ordered will be delivered {dayShipment} with {methodShipment}
        </ShipmentInformationText>
        <BackButtonContainer onClick={onReset}>
          <img src={arrow} alt="arrow"></img>
          <BackButtonTitle>Go to homepage</BackButtonTitle>
        </BackButtonContainer>
      </CenterFormContainer>
    </FinishFormContainer>
  );
}

export default FinishForm;
