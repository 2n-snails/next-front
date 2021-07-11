import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "../Product/Product";
import SelectBox from "../common/SelectBox";
import { productOptionList } from "../../lib/data/staticData";

const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    row-gap: 3rem;
    column-gap: 1rem;
    padding : 10rem;
    
`;

const Home: React.FC = () => {
  const [productOption, setProductOption] = useState<string | undefined>();

  const { productsList } = useSelector((state: any) => state.products);

  //* 상품 옵션 변경 시
  const onChangeProductOption = useCallback((event:React.ChangeEvent<HTMLSelectElement>) => {
    setProductOption(event.target.value);
  }, []);

  return (
    <>
      <SelectBox
        type="normal"
        options={productOptionList}
        defaultValue={productOptionList[0]}
        value={productOption}
        onChange={onChangeProductOption}
      />
      <HomeContainer>
        {productsList.map((data:any) => (
          <>
            <Products data={data} />
          </>
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
