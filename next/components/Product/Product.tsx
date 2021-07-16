import { date } from "faker/locale/zh_TW";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    border :1px solid grey;
    
    .product_main_items{
        #product_image img{
          width : 100%;
          height : 100%;
        }

    }

    .product_main_items_info{
        display : flex;
        flex-direction: column;
        align-items: center;
        
        /* 2줄 넘어가면 ... 표시 처리하기 */
        .product_title h1{
          text-align: center;
          padding : 1rem 0;
          font-size: 16px;
          font-weight: bold;
          width: 250px;
         white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }

        .product_content p{
          display: block;
          text-align: left;
          padding: 1rem;
          font-size: 15px;
          width: 250px;
          
          
          /* 라인 설정 6줄 부터 ... 표시 */
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;

          /* 높이 설정 */
          line-height: 1.5em;
          max-height: 10em;

        }
    }


`;

const ProductUserInfo = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border : 1px solid grey;

    #product_user_info img{
      width: 30px;
      height: 30px;
    }
`;

interface IProps{
    data: object;
}
const Product: React.FC<IProps> = ({ data }) => {
  function datefunction(asd) {
    const year = asd.split("-")[0];
    const month = asd.split("-")[1];
    const day = asd.split("-")[2];

    const postDate = new Date(year, month, day);
    const presentDate = new Date();

    const postRealDate = presentDate.getTime() - postDate.getTime();

    console.log(postRealDate);

    const postRealDay = postRealDate / (1000 * 3600 * 24);

    // 월
    console.log(postRealDay * 30);
    //  년
    console.log(postRealDay * 30 * 12);

    return postRealDay;
  }

  console.log(data);

  return (
    <ProductContainer>
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
          <p>{data.productContent}</p>
        </div>
        {/* 상품 업로드 날짜 */}
        <div>
          <p>{datefunction(data.productUploadDate)}</p>
          <span>{data.Comments.length}개의 댓글</span>
        </div>
      </div>

      {/* 상품 사용자 정보 */}
      <ProductUserInfo>
        <div>
          <figure id="product_user_info">
            <img src={data.User.src} alt="유저 이미지" />
          </figure>
        </div>
        <div className="product_user_info_title">
          <h3>{data.User.nickname}</h3>
        </div>
        <div className="product_user_info_like">
          <figure />
        </div>
      </ProductUserInfo>
    </ProductContainer>
  );
};

export default Product;
