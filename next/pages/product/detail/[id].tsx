import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";

interface IProps {

}

const ProductDetail: React.FC<IProps> = () => {
  const { query } = useRouter();

  const productDetail = useSelector((state) => state.products.productsList);
  const detailData = productDetail.filter((data) => query.id === data.productNo);

  return (
    <ProductDetail>
      <div>
        {detailData.map(() => <div>Product Detail</div>)}
      </div>
    </ProductDetail>
  );
};

export default ProductDetail;
