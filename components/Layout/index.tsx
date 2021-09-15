import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Container = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  background-color: white;
  margin: 0 auto;

  @media (max-width: 414px) {
    max-width: 414px;
    max-height: 100%;
    overflow: hidden;
  }
  /*
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 414px;
    max-height: 896px;
    background-color: black;
  } */
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
