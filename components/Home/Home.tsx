import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Products from '../Product/Product';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Home: React.FC = () => {
  const { productsList } = useSelector((state: any) => state.products);
  console.log(productsList);

  return (
    <HomeContainer>
      {productsList.map((data: any) => (
        <>
          <Products data={data} />
        </>
      ))}
    </HomeContainer>
  );
};

export default Home;
