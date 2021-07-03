import React from "react";
import HomePresenter from "@/containers/Home/Home.Presenter";
import { useSelector } from "react-redux";

export const Home: React.FC = () => {
  const { productsList } = useSelector((state: any) => state.products);

  console.log(productsList);
  return <HomePresenter productsList={productsList} />;
};
