import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ProductHeart from "@/assets/svg/Main/Product/product_heart.svg";
import CommentIcon from "@/assets/svg/Main/Product/comment.svg";

import { DateFormat } from "utils/format_date";
import {
  ProductContainer,
  ProductListStyle,
  ProductInfoContainerStyle,
  ProductInfoDetailStyle,
  ProductUserProfileStyle,
  ProductUserContainerStyle,
} from "./style";

const ProductUserInfo = styled.div`
  display: flex;
  line-height: 1.5;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625rem 0.6rem 0.625rem;
  border: 1px solid rgb(248, 249, 250);
  width: 100%;

  a {
    display: flex;
    align-items: center;
  }

  .product_user_name {
    font-size: 14px;
    color: rgb(52, 58, 64);
  }

  #product_user_img img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
    display: block;
    border-radius: 50%;
    margin-top: 5px;
    margin-right: 0.5rem;
  }

  .product_user_info_like {
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

interface IProps {
  data: any;
}

const Product: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <ProductContainer>
      <ProductListStyle>
        {data.map((item) => (
          <ProductInfoContainerStyle>
            <Link href={`/product/detail/${item.productNo}`}>
              <a>
                <figure id="product_image">
                  <img src={item.Images[0].src} alt="상품 이미지" />
                </figure>
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
                <span className="product_sub_title_time">8분전</span>
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
                  <span>13</span>
                  <CommentIcon />
                  <span>14</span>
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
