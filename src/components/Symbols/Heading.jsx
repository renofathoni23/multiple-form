import React from "react";
import styled from "styled-components";

const HeadingContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingTitle = styled.div`
  color: #ff8a00;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 36px;
  font-weight: 800;
  z-index: 2;
`;

const UnderlineTitle = styled.div`
  width: 300px;
  height: 8px;
  background-color: #eeeeee;
  margin-top: -10px;
  z-index: 1;
`;

export default function Heading(props) {
  return (
    <HeadingContainer>
      <HeadingTitle>{props.name}</HeadingTitle>
      <UnderlineTitle></UnderlineTitle>
    </HeadingContainer>
  );
}
