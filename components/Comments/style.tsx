import styled from "styled-components";

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
      span {
        font-size: 13px;
        color: #81898e;
        font-weight: bold;
        margin-top: 8px;
      }
      & > :first-child {
        padding-right: 12px;
      }
    }

    .detail_comment_enter {
      width: 100%;
      height: 100%;

      display: flex;

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

  .detail_comment_fix {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    span {
      font-size: 10px;
    }
    span:not(:last-child) {
      padding: 0 3px 0 0;
    }
  }
`;
