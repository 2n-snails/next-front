import React from "react";
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
        

        .product_title {
          padding : 1rem 0;
          font-size: 18px;
          font-weight: bold;
        }

        .product_content{
          padding: 1rem;
          font-size: 15px;
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
  console.log(data);

  return (
    <ProductContainer>
      {/* 상품 이미지 */}
      <div className="product_main_items">
        <figure id="product_image">
          <img src={data.Images[0].src} alt="상품 이미지" />
        </figure>
      </div>

      <div className="product_main_items_info">
        {/* 상품 제목 */}
        <div className="product_title">
          <h1>{data.productTitle}</h1>
        </div>
        {/* 상품내용 */}
        <div className="product_content">
          <h2>{data.productContent}</h2>
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
