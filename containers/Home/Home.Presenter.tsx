import Product from "@/components/Product";
import React from "react";

// myProps.valTxt.map((text, index) => {
//   obj[index] = text;
// });
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
