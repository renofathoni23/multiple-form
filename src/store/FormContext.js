import React, { useState } from "react";

const FormContext = React.createContext({
  onBack: () => {},
  onNext: () => {},
  step: 0,
});

export const FormProvider = (props) => {
  const [step, setStep] = useState(1);

  function onNext() {
    setStep((prev) => prev + 1);
  }

  function onBack() {
    setStep((prev) => prev - 1);
  }

  const contextValue = {
    onBack: onBack,
    onNext: onNext,
    step: step,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
