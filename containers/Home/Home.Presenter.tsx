import Product from "@/components/Product";
import React from "react";

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
