import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow_back.png";
import FormContext from "../../store/FormContext";
import { useContext } from "react";
import Heading from "../Symbols/Heading";
import RadioButton from "../Symbols/RadioButton";

const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
`;

const BackButtonTitle = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-top: 30px;
  margin-bottom: 60px;
`;
function ShippingForm() {
  const formCtx = useContext(FormContext);
  let shipmentValue = [
    { id: 1, method: "GO-SEND", amount: "15,000" },
    { id: 2, method: "JNE", amount: "9,000" },
    { id: 3, method: "Personal Courir", amount: "29,000" },
  ];

  let paymentValue = [
    { id: 1, method: "e-Wallet", amount: "1,500,000" },
    { id: 2, method: "Bank Transfer" },
    { id: 3, method: "Virtual Account" },
  ];

  const [currentShipment, setCurrentShipment] = useState(shipmentValue[0].id);
  console.log(formCtx.shipmentMethod.id);

  return (
    <>
      <BackButtonContainer onClick={formCtx.onBack}>
        <img src={arrow} alt="arrow"></img>
        <BackButtonTitle>Back To Delivery</BackButtonTitle>
      </BackButtonContainer>
      <Heading title="Shipment"></Heading>
      <OptionContainer>
        {shipmentValue.map((shipment) => (
          <div
            onClick={() => formCtx.onChangeShipment(shipment)}
            key={shipment.id}
          >
            <RadioButton
              type="shipment"
              method={shipment.method}
              amount={shipment?.amount}
              isActive={shipment.id === formCtx.shipmentMethod.id}
            ></RadioButton>
          </div>
        ))}
      </OptionContainer>
      <Heading title="Payment"></Heading>
      <OptionContainer>
        {" "}
        {paymentValue.map((payment) => (
          <div
            onClick={() => formCtx.onChangePayment(payment)}
            key={payment.id}
          >
            <RadioButton
              type="payment"
              method={payment.method}
              amount={payment?.amount}
              isActive={payment.id === formCtx.paymentMethod.id}
            ></RadioButton>
          </div>
        ))}
      </OptionContainer>
    </>
  );
}

export default ShippingForm;
