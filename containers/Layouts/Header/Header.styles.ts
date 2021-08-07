import styled from "styled-components";

export const HeaderSection = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;

  .header-logo {
    & .header-logo-wrapper {
      display: flex;
      align-items: center;
      overflow: hidden;

      & img {
        width: 130px;
        height: 110px;
        display: block;
      }
    }
  }

  .header-list-wrapper {
    & ul {
      display: flex;
      align-items: center;

      & li {
        padding: 10px 0 0 0;
        margin: 0 30px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        &:hover span {
          text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  /*로그인 회원가입 */
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${({ theme }) => theme.gray_f7};
      }
    }

    .header-login-buton {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }

  .header-user-profile {
    display: flex;
    align-items: center;
    height: 50px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: 0;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }

    .header-user-profile-image {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  /** react-outside-click-handler div에는 className을 줄 수 없어서
    인접 요소 OR Q & A 다음 오는 div를 선택해야합니다.
 */
  .outside-click-div + div {
    position: relative;
  }

  .header-usermenu {
    display: flex;
    flex-direction: column;

    position: absolute;
    right: 30px;
    top: 80px;
    width: 200px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: white;

    li {
      display: flex;
      flex-direction: column !important;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.gray_f7};
      }
    }

    .header-usermenu-divider {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: ${({ theme }) => theme.gray_f7};
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 0;

    img {
      width: 10px;
      height: 30px;
    }

    .header-list-wrapper {
      & ul {
        & li {
          width: 30px;
          height: 30px;
          padding: 5px 0 0 0;
          margin: 0 15px;
          font-size: 13px;

          &:hover span {
            text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;
