import "./App.css";
import styled from "styled-components";
import DeliveryForm from "./components/Form/DeliveryForm";
import Summary from "./components/Form/Summary";
import { FormProvider, useForm } from "react-hook-form";
import StepForm from "./components/Form/StepForm";
import FormContext from "./store/FormContext";
import { useContext, useEffect } from "react";
import ShippingForm from "./components/Form/ShippingForm";
import FinishForm from "./components/Form/FinishForm";
import { devices } from "./utils/MediaQueries";

const StyledContainer = styled.div`
  width: 1100px;
  height: 550px;
  background-color: #fff;
  box-shadow: 2px 10px 20px 0px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  @media ${devices.mobile} {
    width: 95%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const FormContainer = styled.div`
  width: 75%;
  height: 100%;
  @media ${devices.mobile} {
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  height: 100%;
  margin: 30px 30px 0 40px;
  @media ${devices.mobile} {
    margin: 10px 0px 0px 10px;
  }
`;

function App() {
  const formCtx = useContext(FormContext);
  const methods = useForm({ mode: "all" });
  var formStep = formCtx.step;
  const { setValue, getValues } = methods;
  console.log(formCtx.formValues);
  const ActiveStepContent = () => {
    switch (formStep) {
      case 1:
        return <DeliveryForm></DeliveryForm>;
      case 2:
        return <ShippingForm></ShippingForm>;
      case 3:
        return <FinishForm></FinishForm>;
      default:
        return null;
    }
  };

  useEffect(() => {
    const saveFormValues = () => {
      const formValues = getValues();
      localStorage.setItem("formValues", JSON.stringify(formValues));
    };
    window.addEventListener("beforeunload", saveFormValues);
    return () => {
      window.removeEventListener("beforeunload", saveFormValues);
    };
  }, [getValues]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("formValues"));
    if (storedValues) {
      if ("payment" in storedValues) {
        formCtx.onChangePayment(storedValues["payment"]);
      }
      if ("shipment" in storedValues) {
        formCtx.onChangeShipment(storedValues["shipment"]);
      }
      Object.keys(storedValues).forEach((key) => {
        setValue(key, storedValues[key]);
      });
    }
  }, []);

  return (
    <div className="App">
      <FormProvider {...methods}>
        <StepForm></StepForm>
        <StyledContainer>
          <FormContainer>
            <FormWrapper>{ActiveStepContent()}</FormWrapper>
          </FormContainer>
          <Summary></Summary>
        </StyledContainer>
      </FormProvider>
    </div>
  );
}

export default App;
