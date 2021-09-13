import Link from "next/link";
import React from "react";
import ProductHeart from "@/assets/svg/Main/Product/product_heart.svg";
import CommentIcon from "@/assets/svg/Main/Product/comment.svg";

import { DateFormat } from "utils/format_date";
import {
  ProductContainer,
  ProductListStyle,
  ProductInfoContainerStyle,
  ProductInfoDetailStyle,
  ProductUserContainerStyle,
} from "./style";

interface IProps {
  data: any;
}

const Product: React.FC<IProps> = ({ data }) => {
  return (
    <ProductContainer>
      <ProductListStyle>
        {data.map((item) => (
          <ProductInfoContainerStyle>
            <Link href={`/product/detail/${item.productNo}`}>
              <a>
                <div className="product_main_image">
                  <img src={item.Images[0].src} alt="상품 이미지" />
                </div>
              </a>
            </Link>
            <ProductInfoDetailStyle>
              <div className="product_main_title">
                <h2>상품제목 일까요 뭘까요 아닌가요 이렇게 길어도되나요</h2>
              </div>

              <div className="product_sub_title">
                <span className="product_sub_title_addr">
                  서울 강남구 일원2동
                </span>
                <div className="product_blank" />
                <span className="product_sub_title_time">
                  {DateFormat(item.productUploadDate)}
                </span>
              </div>

              <p className="product_price">
                {item.productPrice.toLocaleString()} 원
              </p>

              <ProductUserContainerStyle>
                <div className="product_user_profile">
                  <img src={item.User.src} alt="유저이미지" />
                  <span className="product_user_profile_nickname">
                    {item.User.nickname}
                  </span>
                </div>
                <div className="product_user_icon">
                  <ProductHeart />
                  <span>{item.productLike}</span>
                  <CommentIcon />
                  <span>{item.Comments?.length}</span>
                </div>
              </ProductUserContainerStyle>
            </ProductInfoDetailStyle>
          </ProductInfoContainerStyle>
        ))}
      </ProductListStyle>
    </ProductContainer>
  );
};

export default Product;
