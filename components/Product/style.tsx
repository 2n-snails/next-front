import theme from "@/styles/theme";
import styled from "styled-components";

export const ProductContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const ProductListStyle = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 42px 52px;

  justify-items: center;
  align-items: center;

  flex-wrap: wrap;

  background: #ffff;
  overflow: hidden;

  @media (max-width: 414px) {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductInfoContainerStyle = styled.div`
  margin-top: 3rem;
  width: 250px;
  height: 410px;
  border: 1px solid ${theme.color.gray_cc};
  outline: none;
  border-radius: 8px;
  overflow: hidden;

  .product_main_image {
    img {
      width: 100%;
      height: 230px;
      outline: none;
      object-fit: cover;
    }
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 147px;
    overflow: hidden;
    display: inline-flex;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${theme.color.gray_cc};

    .product_main_image {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const ProductInfoDetailStyle = styled.div`
  padding: 0 0 0 17px;
  .product_main_title {
    h2 {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${theme.color.gray_aa};
      /* 단어 단위로 줄바꿈 */
      word-break: keep-all;
    }
  }

  .product_blank {
    width: 0.5px;
    height: 16px;
    border: 0.5px solid ${theme.color.gray_cc};
    outline: none;
  }

  .product_sub_title {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .product_sub_title_addr {
      padding-right: 5px;
    }

    .product_sub_title_time {
      padding-left: 12px;
    }

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: ${theme.color.gray_bb};
    }
  }

  .product_price {
    padding: 6px 0 11px 0;
    color: ${theme.color.blue_aa};
  }

  @media (max-width: 414px) {
    .product_main_title {
      h2 {
        font-size: 13px;
        font-weight: normal;
        line-height: 20px;
      }
    }
  }
`;

export const ProductUserContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .product_user_profile {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 30px;
    }
    .product_user_profile_nickname {
      padding-left: 11px;
      font-size: 12px;
      line-height: 20px;
    }
  }

  .product_user_icon {
    display: flex;
    align-items: center;
    padding: 0 10px 0 0;

    span {
      padding: 0 8px;
      font-size: 12px;
      color: ${theme.color.gray_dd};
    }
  }

  @media (max-width: 414px) {
    .product_user_profile {
      display: none;
    }

    .product_user_icon {
      width: 100%;
      display: flex;
      justify-content: space-around;
      svg {
      }
    }
  }
`;

export const ProductUserProfileStyle = styled.div``;
