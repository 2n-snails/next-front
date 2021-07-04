import styled from "styled-components";

export const LoginModalContainer = styled.div`
  width: 568px;
  padding: 32px;
  height: 460px;
  background-color: white;
  z-index: 11;

  .closeIcon {
    display: block;
    cursor: pointer;
    margin: 0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .sign-up-moal-submit-button-wrapper {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.gray_eb};
  }

  .login-modal-signup {
    color: ${({ theme }) => theme.dark_cyan};
    margin-left: 8px;
    cursor: pointer;
  }

  .social-text {
    margin-top: 1.5rem;
    text-align: center;
  }
  .social-login-wrapper {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;

    & img {
      display: block;
      width: 45px;
      height: 45px;
    }
  }
`;
