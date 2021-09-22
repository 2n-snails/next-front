import theme from "@/styles/theme";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductDetailContainer = styled.div`
  padding-top: 90px;
  max-width: 590px;
  height: 100%;
  margin: 0 auto;
  background-color: #ffff;
  display: flex;
  flex-direction: column;

  .detail_police {
    padding: 16px 0;
    border-bottom: 1px solid #d9dcdd;
  }
  @media (max-width: 414px) {
    padding: 24px 24px;
  }
`;

export const ProductDetailImageContainer = styled.div`
  height: 590px;
  & > img {
    width: 590px;
    height: 590px;
    object-fit: cover;
  }

  @media (max-width: 414px) {
    height: 100%;
    img {
      width: 385px;
      height: 300px;
    }
  }
`;

export const ProductDetailUserInfoContainer = styled.div`
  width: 100%;
  margin-top: 36px;
  padding-bottom: 41px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9dcdd;

  .detail_user_info {
    display: flex;
    justify-content: center;
    align-items: center;

    .detail_user_info_detail {
      display: flex;
      flex-direction: column;
      margin-left: 18px;

      h2 {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 12px;
      }
    }
    img {
      width: 58px;
      height: 58px;
      border-radius: 50%;
    }
  }

  .detail_user_info_icon {
    padding-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 36px;
    }
    svg:last-child {
      margin-right: 0;
    }
  }
`;

export const ProductDetailPostContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9dcdd;

  .detail_product_info {
    display: flex;
    flex-direction: column;

    padding: 15px 0 24px 0;

    h2 {
      font-weight: 500;
      font-size: 20px;
      color: #0e0f10;
      padding: 8px 0;
    }

    h3 {
      padding: 8px 0;
      font-size: 18px;
      font-weight: 500;
      color: #0e0f10;
    }

    p {
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      color: #a7adb0;
    }
    .product_blank::before {
      padding: 0 0.8px;
      margin: 0 5px;
      background-color: ${theme.color.greyscale_2};
      content: "";
    }
  }

  .detail_product_content {
    display: flex;
    flex-direction: column;

    .detail_product_content_info {
      font-size: 14px;
      font-weight: normal;
      color: #484d50;
    }

    & > :nth-child(2) {
      padding: 16px 0;
      font-size: 13px;
      color: #a7adb0;

      .product_blank {
        margin: 0 10px;
        height: 16px;
        border: 0.5px solid ${theme.color.greyscale_2};
        outline: none;
      }
    }
  }
`;

export const ProductDetailCommentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 21px 0 36px 0;
  display: flex;
  flex-direction: column;
  & > h2 {
    font-weight: 500;
    color: #0e0f10;
    font-size: 16px;
    padding-bottom: 36px;
  }

  .detail_comment_wrapper {
    display: flex;
    padding-bottom: 16px;
    width: 100%;

    a {
      padding-right: 16px;
      img {
        width: 58px;
        height: 58px;
        border-radius: 50%;
      }
    }

    .detail_comment_user_contents {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .detail_comment_user_profile {
      & > :first-child {
        font-size: 16px;
        color: #484d50;
      }

      & > :last-child {
        padding-left: 8px;
        font-size: 13px;
        color: #a7adb0;
      }
    }

    .detail_comment_user_content {
      font-size: 14px;
      color: #484d50;
    }
    .detail_comment_reply {
      font-size: 13px;
      color: #81898e;
      font-weight: bold;
      margin-top: 8px;
    }

    .detail_comment_enter {
      display: inline-flex;

      button {
        min-width: 57px;
        height: 100%;
        outline: none;
        border: none;
        background: #d9dcdd;
        border-radius: 3px;
        color: #ffff;
        cursor: pointer;
      }
    }
  }
`;
