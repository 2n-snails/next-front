import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "@/components/Product/Product";
import { productOptionList } from "@/lib/data/staticData";
import { SelectBox } from "@/components/common/SelectBox";

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  .main_select_box {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const FaqContainer = styled.div`
  .faq_main_content {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 5%;
    bottom: 50%;
    width: 80px;
    height: 80px;
    background: linear-gradient(
      rgb(204 234 255) 0%,
      rgb(52 170 255) 100%,
      rgb(207 230 255) 100%
    );
    position: fixed;
    border-radius: 50%;
    box-shadow: box-shadow rgb(0 0 0 / 15%) 0px 4px 6px 0px;
    cursor: pointer;

    &:before {
      content: "";
      width: 34px;
      height: 34px;
      background-image: url("https://cdn.channel.io/plugin/images/ch-new-launcher-icon-68.png");
      background-size: 136px;
      background-position: 0 0;
    }
  }
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3rem;
  column-gap: 1rem;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Home: React.FC = () => {
  const [productOption, setProductOption] = useState<string | undefined>();

  const { productsList } = useSelector((state: any) => state.products);

  //* 상품 옵션 변경 시
  const onChangeProductOption = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setProductOption(event.target.value);
    },
    [],
  );

  return (
    <MainContainer>
      {/* select box */}
      <div className="main_select_box">
        <SelectBox
          type="normal"
          options={productOptionList}
          defaultValue={productOptionList[0]}
          value={productOption}
          onChange={onChangeProductOption}
        />
      </div>

      {/* 문의하기 버튼 */}
      <FaqContainer>
        <div className="faq_main_content" />
      </FaqContainer>

      <HomeContainer>
        {productsList.map((data: any) => (
          <>
            <Products data={data} />
          </>
        ))}
      </HomeContainer>
    </MainContainer>
  );
};

export default Home;
