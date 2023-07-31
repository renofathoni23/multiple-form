import React, { useState } from "react";

const FormContext = React.createContext({
  onBack: () => {},
  onNext: () => {},
  resetStep: () => {},
  changeStep: () => {},
  step: 0,
  shipmentMethod: {},
  paymentMethod: {},
  onChangeShipment: () => {},
  onChangePayment: () => {},
  cost: 0,
  changeCost: () => {},
  formValues: {},
  changeFormValue: () => {},
});

export const FormProvider = (props) => {
  const [step, setStep] = useState(1);
  const [shipmentMethod, setShipmentMethod] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const [cost, setCost] = useState(500000);
  const [formValues, setFormValues] = useState();

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

  function changeCost(cost) {
    setCost(cost);
  }

  function changeFormValue(value) {
    setFormValues(value);
  }

  function changeStep(step) {
    setStep(step);
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
    changeCost: changeCost,
    resetStep: resetStep,
    formValues: formValues,
    changeFormValue: changeFormValue,
    changeStep: changeStep,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
