import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import ButtonComponent from "@/components/common/Button";
import Zzim from "@/assets/svg/zzim.svg";
import Call from "@/assets/svg/call.svg";
import Siren from "@/assets/svg/siren.svg";

import Love from "@/assets/svg/love.svg";
import WatchView from "@/assets/svg/WatchView.svg";
import Clock from "@/assets/svg/clock.svg";

import { DateFormat } from "utils/format_date";
import ProductDetailContent from "@/components/Product/ProductDetailContent";
import React from "react";

import ProductDetailImage from "@/components/Image/ProductDetailImage";
import ProductDetailComment from "@/components/Product/ProductDetailComment";

const ProductDetailContainer = styled.div`
  width: 677px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  #image_total_info {
    position: relative;
    width: 729px;
    margin: 0 auto;
    padding-top: 1rem;

    /* img {
      width: 677px;
      height: 300px;
      object-fit: cover;
    } */
  }
  .product_detail_info_contents {
    display: flex;
    flex-direction: column;

    .product_detail_info_main_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .product_detail_info_main_title_name {
        font-size: 1.5rem;
        padding: 2rem 0 2rem 1rem;
      }

      .product_detail_info_main_title_price {
        padding: 3.5rem 1rem;
        font-size: 2rem;
        color: #343131;

        span {
          padding: 0 1rem;
          font-size: 1.5rem;
        }
      }
    }

    .product_detail_info_main_btn {
      display: flex;
      justify-content: center;
      flex-direction: row;

      .zzim_btn,
      .call_btn,
      .siren_btn {
        position: relative;
        width: 250px;
        padding: 0 1rem;

        svg {
          position: absolute;
        }
      }

      .zzim_btn_svg {
        top: 10px;
        left: 60px;
      }

      .call_btn_svg {
        top: 13px;
        left: 80px;
      }

      .siren_btn_svg {
        top: 10px;
        left: 100px;
      }
    }

    .product_detail_user_info {
      display: felx;
      align-items: center;
      margin-top: 1.5rem;
      margin-left: 1rem;
      border-bottom: 1px solid rgb(248, 249, 250);
      padding-bottom: 1rem;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
      }

      .product_detail_user_info_nickname {
        p {
          color: rgb(134, 142, 150);
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }

    .product_detail_info_user_info_view {
      display: flex;

      & > div {
        padding: 1.5rem;
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    padding: 0 5rem;
    svg {
      width: 15px;
      height: 15px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 1rem;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

interface IProps {}

const ProductDetail: React.FC<IProps> = () => {
  const { query } = useRouter();

  const productDetail = useSelector(
    (state: any) => state.products.productsList,
  );

  const detailData = productDetail.filter((data: any) => {
    return query.id === data.productNo?.toString();
  });

  return (
    <ProductDetailContainer>
      <section id="image_total_info">
        {detailData.map((data) => (
          <div className="image_slider">
            {/* 이미지 캐러셀 영영 */}
            <ProductDetailImage images={data.Images} />
          </div>
        ))}
      </section>
      {/* 상품 Detail info content 영역 */}
      <div className="product_detail_info_contents">
        {detailData.map((data) => (
          <>
            {/*상품 사진 정보 */}
            <div className="product_detail_info_main_title">
              <div className="product_detail_info_main_title_name">
                <p>{data.productTitle}</p>
              </div>
              <div className="product_detail_info_main_title_price">
                <p>
                  {data.productPrice.toLocaleString()}
                  <span>원</span>
                </p>
              </div>
            </div>
            {/* 상품 버튼 */}
            <div className="product_detail_info_main_btn">
              <div className="zzim_btn">
                <ButtonComponent name="찜하기" type="button" color="#2fa0ead9">
                  <p>찜하기</p>
                  <Zzim className="zzim_btn_svg" />
                </ButtonComponent>
              </div>

              <div className="call_btn">
                <ButtonComponent
                  name="연락하기"
                  type="button"
                  color="#9bd00ed9"
                >
                  <p>연락하기</p>
                  <Call className="call_btn_svg" />
                </ButtonComponent>
              </div>
              <div className="siren_btn">
                <ButtonComponent
                  name="신고하기"
                  type="button"
                  color="#f8d6d6b5"
                >
                  <p>신고하기</p>
                  <Siren className="siren_btn_svg" />
                </ButtonComponent>
              </div>
            </div>

            {/* 사용자 정보 */}
            {/* 나중에 사용자 정보 컴포넌트 리팩토링 통일하기 */}
            <div className="product_detail_user_info">
              <img src={data.User.src} alt="사용자프로필" />
              <Link href="#">
                <div className="product_detail_user_info_nickname">
                  <a href="#">
                    <p>{data.User.nickname} 님의 상점</p>
                  </a>
                </div>
              </Link>
            </div>

            {/* 찜,좋아요, 시간 출력 */}
            <div className="product_detail_info_user_info_view">
              <div>
                <Love />
                <p>{data.productLike}</p>
              </div>
              <div>
                <WatchView />
                <p>{data.productView}</p>
              </div>
              <div>
                <Clock />
                <p>
                  {data &&
                    data.productUploadDate &&
                    DateFormat(data.productUploadDate)}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* 상세 내용 */}
      <ProductDetailContent data={detailData} />
      {/* 상품 댓글*/}
      {detailData[0] && detailData[0].Comments && (
        <ProductDetailComment comments={detailData[0].Comments} />
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
