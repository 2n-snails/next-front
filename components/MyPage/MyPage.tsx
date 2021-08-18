import Button from "@/components/common/Button";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Products from "@/components/Product/Product";
import { productOptionList } from "@/lib/data/staticData";
import { SelectBox } from "@/components/common/SelectBox";
import Link from "next/link";

import UserInfo from "@/components/UserInfo/UserInfo";

const MainContainer = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;

  .main_select_box {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const ButtonContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
  button {
    margin-bottom: 1rem;
    width: 10rem;
    height: 2rem;
    border-style: none;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.gray_c4};
    cursor: pointer;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 20rem;
    height: 5rem;
    margin-bottom: 1rem;
    button {
      width: 9rem;
    }
  }
`;

const ButtonHomeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const HomeContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  column-gap: 1rem;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MyPage: React.FC = () => {
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
      <UserInfo />

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

      <ButtonHomeContainer>
        <ButtonContainer>
          <div className="button_container_top">
            <Button>판매중인 상품</Button>
            <Button>찜 상품</Button>
          </div>
          <div className="button_container_bottom">
            <Button>내 상점 후기 보기</Button>
            <Link href="/profile">
              <Button>내 정보</Button>
            </Link>
          </div>
        </ButtonContainer>

        <HomeContainer>
          {productsList.map((data: any) => (
            <>
              <Products data={data} />
            </>
          ))}
        </HomeContainer>
      </ButtonHomeContainer>
    </MainContainer>
  );
};

export default MyPage;
