import React from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow_back.png";
import FormContext from "../../store/FormContext";
import { useContext } from "react";
import Heading from "../Symbols/Heading";
import RadioButton from "../Symbols/RadioButton";
import { useFormContext } from "react-hook-form";
import { devices } from "../../utils/MediaQueries";

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
  @media ${devices.mobile} {
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 36px;
  }
`;
function ShippingForm() {
  const { setValue } = useFormContext();
  const formCtx = useContext(FormContext);
  let shipmentValue = [
    { id: 1, method: "GO-SEND", amount: 15000, estimate: "today" },
    { id: 2, method: "JNE", amount: 9000, estimate: "2 days" },
    { id: 3, method: "Personal Courir", amount: 29000, estimate: "1 day" },
  ];

  let paymentValue = [
    { id: 1, method: "e-Wallet", amount: "1,500,000" },
    { id: 2, method: "Bank Transfer" },
    { id: 3, method: "Virtual Account" },
  ];

  console.log(formCtx.shipmentMethod.id);

  const setValueShipmentToForm = (shipment) => {
    setValue("shipment", shipment);
  };

  const setValuePaymentToForm = (payment) => {
    setValue("payment", payment);
  };

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
            onClick={() => {
              formCtx.onChangeShipment(shipment);
              setValueShipmentToForm(shipment);
            }}
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
            onClick={() => {
              formCtx.onChangePayment(payment);
              setValuePaymentToForm(payment);
            }}
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
