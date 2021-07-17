import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "../Product/Product";
import SelectBox from "../common/SelectBox";
import { productOptionList } from "../../lib/data/staticData";

const MainContainer = styled.div`


  @media(max-width: 1440px){
    width: 1024px;
  }

  @media(max-width: 1919px){
    width: 1376px;
  }

  margin-left: auto;
  margin-right: auto;
  
  .main_select_box{
    display: flex;
    justify-content: flex-end;
    margin-top : 1.5rem;
    padding : 1.5rem 0;
  }
`;
const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    row-gap: 3rem;
    column-gap: 1rem;
`;

const Home: React.FC = () => {
  const [productOption, setProductOption] = useState<string | undefined>();

  const { productsList } = useSelector((state: any) => state.products);

  //* 상품 옵션 변경 시
  const onChangeProductOption = useCallback((event:React.ChangeEvent<HTMLSelectElement>) => {
    setProductOption(event.target.value);
  }, []);

  return (
    <MainContainer>
      <div className="main_select_box">
        <SelectBox
          type="normal"
          options={productOptionList}
          defaultValue={productOptionList[0]}
          value={productOption}
          onChange={onChangeProductOption}
        />
      </div>
      <HomeContainer>

        {productsList.map((data:any) => (
          <>
            <Products data={data} />
          </>
        ))}
      </HomeContainer>
    </MainContainer>
  );
};

export default Home;
