import Product from "@/components/Product";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const data = useSelector((state: any) => state.products.productsList);
  return <Product data={data} />;
};

export default index;
