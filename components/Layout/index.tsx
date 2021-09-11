import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Container = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  background-color: white;
  margin: 0 auto;
  /* overflow: hidden; */
`;

interface Props {
  children: React.ReactNode;
}
const LayoutComponents = ({ children }: Props): JSX.Element => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default LayoutComponents;
