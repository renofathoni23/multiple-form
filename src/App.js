import "./App.css";
import styled from "styled-components";
import DeliveryForm from "./components/Form/DeliveryForm";
import Summary from "./components/Form/Summary";
import { FormProvider, useForm } from "react-hook-form";
import StepForm from "./components/Form/StepForm";
import FormContext from "./store/FormContext";
import { useContext } from "react";
import ShippingForm from "./components/Form/ShippingForm";
import FinishForm from "./components/Form/FinishForm";

const StyledContainer = styled.div`
  width: 1100px;
  height: 550px;
  background-color: #fff;
  box-shadow: 2px 10px 20px 0px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;
const FormContainer = styled.div`
  width: 75%;
  height: 100%;
`;
const FormWrapper = styled.div`
  height: 100%;
  margin: 30px 30px 0 40px;
`;

const FormFinishContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const methods = useForm({ mode: "all" });
  const formCtx = useContext(FormContext);
  var formStep = formCtx.step;
  console.log(formStep);
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
