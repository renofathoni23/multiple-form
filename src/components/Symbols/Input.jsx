import styled from "styled-components";

const InputForm = styled.input`
  width: ${(props) => (props.dropshipper ? "300px" : "400px")};
  height: ${(props) => (props.address ? "120px" : "60px")};
  color: #2d2a40;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid
    ${(props) =>
      props.hasNoError ? "#1BD97B" : props.isFilled ? "#FF8A00" : "#ccc"};
  background: #fff;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
  }
`;

export const CheckBoxInput = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
  accent-color: #1bd97b;
`;

export default InputForm;
