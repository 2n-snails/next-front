import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { DateFormat } from "utils/format_date";
import Love from "@/assets/svg/love.svg";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;

  overflow: hidden;

  &:hover {
    box-shadow: rgb(0 0 0 / 34%) 0px 4px 16px 0px;
    transition: box-shadow 0.25s ease-in 0.25s;
  }
  .product_main_items {
    #product_image img {
      width: 100%;
      height: 100%;
    }
  }

  .product_main_items_info {
    display: flex;
    padding: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: center;

    /* 2줄 넘어가면 ... 표시 처리하기 */
    .product_title {
      display: flex;

      h1 {
        text-align: center;
        padding: 1rem 0;
        font-size: 16px;
        font-weight: bold;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .product_content {
      .product_content_p {
        p {
          height: 3.9375rem;

          /* 라인 설정 3줄 부터 ... 표시 */
          /* 높이 설정 */
          line-height: 1.5;
          color: rgb(73, 80, 87);

          margin: 0px 0px 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
          font-size: 0.875rem;
          line-height: 1.5;
          height: 3.9375rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgb(73, 80, 87);
        }
      }

      .product_date_coments {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        font-size: 14px;
        color: rgb(134, 142, 150);

        p,
        span {
          padding: 0.5rem 0 0 0;
        }
        span {
          padding-left: 0.5rem;
        }
      }
    }
  }
`;

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


  return (
    <ProductContainer>
      <Link href={`/product/detail/${data.productNo}`}>
        <a href="#">
          {/* 상품 이미지 */}
          <div className="product_main_items">
            <figure id="product_image">
              <img src={data.Images[0].src} alt="상품 이미지" />
            </figure>
          </div>

          {/* 상품 정보 */}
          <div className="product_main_items_info">
            {/* 상품 제목 */}
            <div className="product_title">
              <h1>{data.productTitle}</h1>
            </div>
            {/* 상품내용 */}
            <div className="product_content">
              <div className="product_content_p">
                <p>{data.productContent}</p>
              </div>
              {/* 상품 업로드 날짜, 댓글 수*/}
              <div className="product_date_coments">
                <p>
                  {data &&
                    data.productUploadDate &&
                    DateFormat(data.productUploadDate)}
                </p>
                <span>{data.Comments?.length}개의 댓글</span>
              </div>
            </div>
          </div>

          {/* 상품 사용자 정보 */}
          <ProductUserInfo>
            {/* 사용자 프로필 */}
            <figure id="product_user_img">
              <img src={data.User.src} alt="유저 이미지" />
            </figure>
            {/* 사용자 이름 */}
            <span className="product_user_name">{data.User.nickname}</span>
            {/* 하트 표시 */}
            <div className="product_user_info_like">
              <Love className="love_icon" />
              {data.productLike}
            </div>
          </ProductUserInfo>
        </a>
      </Link>
    </ProductContainer>
  );
};

export default Product;
