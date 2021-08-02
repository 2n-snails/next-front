import { Button } from "@/styles/common/Button";
import React from "react";
import styled from "styled-components";
import TrashIcon from "../../public/static/svg/trash2.svg";
import EditIcon from "../../public/static/svg/edit.svg";
import SirenIcon from "../../public/static/svg/siren.svg";

const ProductDetailContentContainer = styled.div`
  border-bottom: 1px solid #808080;

  .product_detaill_content {
    letter-spacing: 0.08em;
    line-height: 1.5em;
    color: #343131;
    font-size: 16px;
  }
`;

const ProductDetailContentBtn = styled.div`
  float: right;
  button {
    font-size: 14px;
    width: 33.3333%;
  }
`;
interface IProps {
  data: Array<any>;
}

const ProductDetailContent: React.FC<IProps> = ({ data }) => {
  return (
    // 상품 정보 출력
    <ProductDetailContentContainer>
      <div className="product_detaill_content">
        <span>{data[0]?.productContent}</span>
      </div>

      {/* 본인일 경우에만 가능하도록 */}
      <ProductDetailContentBtn>
        <Button color="white">
          <EditIcon width="24px" height="24px" />
        </Button>
        <Button color="white">
          <TrashIcon width="24px" height="24px" />
        </Button>
        <Button color="white">
          <SirenIcon />
        </Button>
      </ProductDetailContentBtn>
    </ProductDetailContentContainer>
  );
};

export default ProductDetailContent;
