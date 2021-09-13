import React from "react";
import ProductHeart from "@/assets/svg/Detail/detail_heart.svg";
import ChatIcon from "@/assets/svg/Detail/Chat.svg";
import StarIcon from "@/assets/svg/Detail/start.svg";
import Link from "next/link";

import ImageZoom from "@/components/ImageZoom";
import {
  ProductDetailCommentContainer,
  ProductDetailContainer,
  ProductDetailPostContainer,
  ProductDetailUserInfoContainer,
} from "./style";

interface Props {
  data: any;
}
const ProductDetail: React.FC<Props> = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    Images,
    Comments,
    User,
    productContent,
    productNo,
    productPrice,
    productUploadDate,
  } = data;

  return (
    <ProductDetailContainer>
      {/* 상품 이미지 & 이미지 캐루셀*/}
      <ImageZoom Images={Images} />

      {/* 상품 유저 정보 */}
      <ProductDetailUserInfoContainer>
        <div className="detail_user_info">
          <div>
            <img src={User.src} alt="유저프로필" />
          </div>

          <div className="detail_user_info_detail">
            <h2>{User.nickname}</h2>
            <p className="detail_user_star">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
          </div>
        </div>
        <div className="detail_user_info_icon">
          <ChatIcon />
          <ProductHeart />
        </div>
      </ProductDetailUserInfoContainer>

      {/* 게시글 정보 */}
      <ProductDetailPostContainer>
        <div className="detail_product_info">
          <p>
            상의
            <span className="product_blank" />
            3시간전
          </p>
          <h2>초록 면 니트 니트 크롭티크 봄니트</h2>
          <p>
            서울 강남구 일원2동
            <span className="product_blank" />
            <span>서울 강남구 일원2동</span>
          </p>
          <h3>39,000원</h3>
        </div>

        <div className="detail_product_content">
          <div className="detail_product_content_info">
            <p>
              봄 가울용 면 원사로 보불 잘 안일어나는 니트입니다. 화사하니 봄에
              입기 닥 좋아오
            </p>
          </div>
          <p>
            관심 10
            <span className="product_blank" />
            댓글 2
            <span className="product_blank" />
            조회 100
          </p>
        </div>
      </ProductDetailPostContainer>
      <p className="detail_police">신고하기</p>

      {/* 상품 문의 Comment */}
      <ProductDetailCommentContainer>
        <h2>상품문의</h2>
        <div>
          <Link href="/">
            <a>
              <img src="" alt="" />
            </a>
          </Link>
          <div>
            <div>
              <h2>빈티지러버</h2>
            </div>
            <div>
              <p>1시간전</p>
            </div>
          </div>
          <div>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div>
              <p>안녕하세요~언제 구매하셨는지 알 수 있을까요?</p>
            </div>
            <div>
              <button type="button">답글쓰기</button>
            </div>
          </div>
        </div>
      </ProductDetailCommentContainer>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
