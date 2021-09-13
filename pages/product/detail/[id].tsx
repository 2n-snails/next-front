import React from "react";
import ProductDetail from "@/components/Product/Detail/index";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

// SSR로 미리 상품들 가져오기
const index: React.FC = () => {
  const { query } = useRouter();

  const productDetail = useSelector(
    (state: any) => state.products.productsList,
  );
  const detailData = productDetail.filter((data: any) => {
    return query.id === data.productNo?.toString();
  });
  if (!detailData) {
    return null;
  }
  return <ProductDetail data={detailData[0]} />;
};

export default index;
