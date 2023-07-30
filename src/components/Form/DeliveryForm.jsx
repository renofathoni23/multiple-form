import React from "react";
import styled from "styled-components";
import CheckBox from "../Symbols/CheckBox";
import InputForm from "../Symbols/Input";
import Heading from "../Symbols/Heading";
import arrow from "../../assets/arrow_back.png";
import { useFormContext } from "react-hook-form";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  margin-top: 36px;
`;

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

const HeadingCheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function DeliveryForm() {
  const { register, getValues, watch } = useFormContext();
  return (
    <>
      <BackButtonContainer>
        <img src={arrow} alt="arrow"></img>
        <BackButtonTitle>Back to cart</BackButtonTitle>
      </BackButtonContainer>
      <HeadingCheckBoxContainer>
        <Heading title="Delivery details"></Heading>
        <CheckBox
          register={register}
          name="isDropshipper"
          label="Send as dropshipper"
        ></CheckBox>
      </HeadingCheckBoxContainer>
      <form>
        <StyledRow>
          <StyledColumn>
            <InputForm
              type="text"
              id="name"
              {...register("name")}
              placeholder="Name"
            ></InputForm>
            <InputForm
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
              placeholder="Phone Number"
            ></InputForm>
            <InputForm
              type="text"
              address
              id="dropshipperNumber"
              {...register("address")}
              placeholder="Delivery Address"
            ></InputForm>
          </StyledColumn>
          <StyledColumn>
            <InputForm
              type="text"
              dropshipper
              id="dropshipperName"
              {...register("dropshipperName")}
              placeholder="Dropshipper name"
              disabled={!getValues("isDropshipper")}
            ></InputForm>
            <InputForm
              type="text"
              dropshipper
              id="dropshipperNumber"
              {...register("dropshipperNumber")}
              placeholder="Dropshipper phone number"
              disabled={!getValues("isDropshipper")}
            ></InputForm>
          </StyledColumn>
        </StyledRow>
        <div>{JSON.stringify(watch(), null, 2)}</div>
      </form>
    </>
  );
}

export default DeliveryForm;
