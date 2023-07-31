import React from "react";
import styled from "styled-components";
import CheckBox from "../Symbols/CheckBox";
import InputForm from "../Symbols/Input";
import Heading from "../Symbols/Heading";
import arrow from "../../assets/arrow_back.png";
import { useFormContext } from "react-hook-form";
import { devices } from "../../utils/MediaQueries";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media ${devices.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  margin-top: 36px;
  @media ${devices.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: column;
    row-gap: 20px;
  }
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
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: baseline;
  }
`;

const AddressCounter = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
  text-align: right;
  display: flex;
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: baseline;
  }
`;

function DeliveryForm() {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();

  //Pattern Value Form
  const phoneNumberPattern = /^[\d\-+()]{6,20}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //Counter Address
  let counter = watch("address");
  let inputLength = counter?.length;

  //Check Dropshipper
  let isCheckDropshipper = watch("isDropshipper");

  //Check length Dropshippername value
  let dropshipperName = watch("dropshipperName");

  //Value Form
  let valueForm = getValues();

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
              id="email"
              {...register("email", {
                pattern: {
                  value: emailPattern,
                  message: "Please enter a valid email",
                },
              })}
              hasNoError={!errors.email && emailPattern.test(watch("email"))}
              isFilled={!!watch("email")}
              placeholder="Email"
            ></InputForm>
            <InputForm
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                pattern: {
                  value: phoneNumberPattern,
                  message: "Please enter a valid phone number (6-20 digits)",
                },
              })}
              hasNoError={
                !errors.phoneNumber &&
                phoneNumberPattern.test(watch("phoneNumber"))
              }
              isFilled={!!watch("phoneNumber")}
              placeholder="Phone Number"
            ></InputForm>
            <InputForm
              type="text"
              address
              id="dropshipperNumber"
              {...register("address", {
                required: "Address is required",
                maxLength: {
                  value: 120,
                  message: " Maxiumum digit for address is 120",
                },
                minLength: {
                  value: 1,
                },
              })}
              placeholder="Delivery Address"
              hasNoError={
                !errors.address && "address" in valueForm && inputLength !== 0
              }
              isFilled={!!watch("address")}
            ></InputForm>
            <AddressCounter>
              Characters Entered: {inputLength}/120
            </AddressCounter>
          </StyledColumn>
          <StyledColumn>
            <InputForm
              type="text"
              dropshipper
              id="dropshipperName"
              {...register("dropshipperName", {
                required: isCheckDropshipper ? "This Field is required" : false,
                minLength: {
                  value: 1,
                },
              })}
              placeholder="Dropshipper name"
              disabled={!getValues("isDropshipper")}
              hasNoError={
                !errors.dropshipperName &&
                "dropshipperName" in valueForm &&
                dropshipperName !== undefined
              }
              isFilled={!!watch("dropshipperName")}
            ></InputForm>
            <InputForm
              type="text"
              dropshipper
              id="dropshipperNumber"
              {...register("dropshipperNumber", {
                required: isCheckDropshipper ? "This Field is required" : false,
                pattern: {
                  value: phoneNumberPattern,
                  message: "Please enter a valid phone number (6-20 digits)",
                },
              })}
              placeholder="Dropshipper phone number"
              disabled={!getValues("isDropshipper")}
              hasNoError={
                !errors.dropshipperNumber &&
                phoneNumberPattern.test(watch("dropshipperNumber"))
              }
              isFilled={!!watch("dropshipperNumber")}
            ></InputForm>
          </StyledColumn>
        </StyledRow>
        {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
      </form>
    </>
  );
}

export default DeliveryForm;
