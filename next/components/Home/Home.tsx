import React from "react";
import styled from "styled-components";
import faker from "faker";

faker.seed(1000);

const HomeContainer = styled.div`
    display: flex;
`;

const Home : React.FC = () => {
  return (
    <HomeContainer />
  );
};

export default Home;
