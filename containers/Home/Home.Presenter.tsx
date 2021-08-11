import Product from "@/components/Product";
import React from "react";

// UI는 Presenter에서 관리한다.
const HomePresenter = ({ productsList }: any) => {
  return (
    <>
      {productsList.map((value: any, index: number) => {
        <>
          <Product key={index} data={value} />
        </>;
      })}
    </>
  );
};

export default HomePresenter;
