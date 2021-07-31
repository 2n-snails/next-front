import React from "react";
import styled from "styled-components";

const ProductDetailContentContainer = styled.div``;

interface IProps {
  data: Array<any>;
}

const ProductDetailContent: React.FC<IProps> = ({ data }) => {
  return (
    // 상품 정보 출력
    <ProductDetailContentContainer>
      <div>
        <span>{data[0].productContent}</span>
      </div>
    </ProductDetailContentContainer>
  );
};

export default ProductDetailContent;
