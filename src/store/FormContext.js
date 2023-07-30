import React, { useState } from "react";

const FormContext = React.createContext({
  onBack: () => {},
  onNext: () => {},
  step: 0,
  shipmentMethod: {},
  paymentMethod: {},
  onChangeShipment: () => {},
  onChangePayment: () => {},
});

export const FormProvider = (props) => {
  const [step, setStep] = useState(1);
  const [shipmentMethod, setShipmentMethod] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});

  function onNext() {
    setStep((prev) => prev + 1);
  }

  function onBack() {
    if (step > 1 ? setStep((prev) => prev - 1) : "");
  }

  function onChangeShipment(shipment) {
    setShipmentMethod(shipment);
  }

  function onChangePayment(payment) {
    setPaymentMethod(payment);
  }

  const contextValue = {
    onBack: onBack,
    onNext: onNext,
    step: step,
    shipmentMethod: shipmentMethod,
    paymentMethod: paymentMethod,
    onChangePayment: onChangePayment,
    onChangeShipment: onChangeShipment,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
