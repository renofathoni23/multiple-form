import React, { useState } from "react";

const FormContext = React.createContext({
  onBack: () => {},
  onNext: () => {},
  resetStep: () => {},
  step: 0,
  shipmentMethod: {},
  paymentMethod: {},
  onChangeShipment: () => {},
  onChangePayment: () => {},
  cost: 0,
});

export const FormProvider = (props) => {
  const [step, setStep] = useState(1);
  const [shipmentMethod, setShipmentMethod] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const [cost, setCost] = useState(500000);

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

  function resetStep() {
    setStep(1);
  }

  const contextValue = {
    onBack: onBack,
    onNext: onNext,
    step: step,
    shipmentMethod: shipmentMethod,
    paymentMethod: paymentMethod,
    onChangePayment: onChangePayment,
    onChangeShipment: onChangeShipment,
    cost: cost,
    resetStep: resetStep,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
