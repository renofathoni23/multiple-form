import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/MediaQueries";
import "@fontsource/montserrat/700.css";

const HeadingContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingTitle = styled.span`
  color: #ff8a00;
  font-size: 36px;
  font-weight: 700;
  z-index: 2;
  font-family: "Montserrat";
  @media ${devices.mobile} {
    font-size: 28px;
  }
`;

const UnderlineTitle = styled.div`
  width: 300px;
  height: 8px;
  background-color: #eeeeee;
  transform: translateY(-10px);
  z-index: 1;
`;

export default function Heading(props) {
  return (
    <HeadingContainer>
      <HeadingTitle>{props.title}</HeadingTitle>
      <UnderlineTitle></UnderlineTitle>
    </HeadingContainer>
  );
}
