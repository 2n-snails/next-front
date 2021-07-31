import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import ButtonComponent from "@/components/common/Button";
import Zzim from "@/assets/svg/zzim.svg";
import Call from "@/assets/public/static/svg/call.svg";
import Siren from "@/assets/public/static/svg/siren.svg";

import Love from "@/assets/public/static/svg/love.svg";
import WatchView from "@/assets/public/static/svg/WatchView.svg";
import Clock from "@/assets/public/static/svg/clock.svg";

import { DateFormat } from "utils/format_date";
import ProductDetailContent from "@/components/Product/ProductDetailContent";

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    width: 1024px;
  }

  @media (max-width: 1919px) {
    width: 1376px;
  }

  margin-left: auto;
  margin-right: auto;

  .image_total_info {
    padding-top: 1rem;
    display: flex;
    justify-content: center;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
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
        font-size: 2.5rem;
      }
    }

    .product_detail_info_main_btn {
      display: flex;
      flex-direction: row;

      .zzim_btn {
        width: 33.3333%;
        position: relative;
        padding: 0 1rem;
        .zzim_btn_svg {
          position: absolute;
          top: 10px;
          left: 150px;
        }
      }

      .call_btn {
        position: relative;
        width: 33.3333%;
        padding: 0 1rem;
        .call_btn_svg {
          position: absolute;
          top: 10px;
          left: 150px;
        }
      }

      .siren_btn {
        position: relative;
        width: 33.33333%;
        padding: 0 1rem;
        .siren_btn_svg {
          position: absolute;
          top: 10px;
          left: 150px;
        }
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
          font-size: 1.5rem;
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
`;

interface IProps {}

const ProductDetail: React.FC<IProps> = () => {
  const { query } = useRouter();

  const productDetail = useSelector(
    (state: any) => state.products.productsList,
  );
  const detailData = productDetail.filter(
    (data) => query.id === data.productNo.toString(),
  );

  return (
    <ProductDetailContainer>
      {/* 이미지 캐러셀 영영 */}
      <div className="image_total_info">
        {detailData.map((data) => (
          <>
            <img src={data.Images[0].src} alt="상품상세이미지" />
          </>
        ))}
      </div>
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
                <p>{data.productPrice.toLocaleString()}원</p>
              </div>
            </div>
            {/* 상품 버튼 */}
            <div className="product_detail_info_main_btn">
              <div className="zzim_btn">
                <ButtonComponent
                  name="찜하기"
                  type="button"
                  color="#2fa0ead9"
                />
                <Zzim className="zzim_btn_svg" />
              </div>

              <div className="call_btn">
                <ButtonComponent
                  name="연락하기"
                  type="button"
                  color="#9bd00ed9"
                />
                <Call className="call_btn_svg" />
              </div>
              <div className="siren_btn">
                <ButtonComponent
                  name="신고하기"
                  type="button"
                  color="#f8d6d6b5"
                />
                <Siren className="siren_btn_svg" />
              </div>
            </div>

            {/* 사용자 정보 */}
            <Link href="#">
              <a href="#">
                <div className="product_detail_user_info">
                  <img src={data.User.src} alt="사용자프로필" />
                  <div className="product_detail_user_info_nickname">
                    <p>{data.User.nickname} 님의 상점</p>
                  </div>
                </div>
              </a>
            </Link>

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
                <p>{DateFormat(data.productUploadDate)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <ProductDetailContent data={detailData} />
    </ProductDetailContainer>
  );
};

export default ProductDetail;
