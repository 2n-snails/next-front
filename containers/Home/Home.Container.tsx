import React from "react";
import HomePresenter from "@/containers/Home/Home.Presenter";
import { useSelector } from "react-redux";

// 모든 기능은 HomeContainer 에서 관리한다.
export const HomeContainer: React.FC = () => {
  const { productsList } = useSelector((state: any) => state.products);

  return <HomePresenter productsList={productsList} />;
};
