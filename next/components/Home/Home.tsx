import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
`;

const Home: React.FC = () => {
  const { productsList } = useSelector((state:any) => state.products);
  console.log(productsList);

  return (
    <HomeContainer />
  );
};

export default Home;
