import styled from "styled-components";
import { devices } from "../../utils/MediaQueries";

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

  @media ${devices.mobile} {
    width: 90%;
    height: ${(props) => (props.address ? "120px" : "60px")};
    flex-direction: column;
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
