import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../public/static/svg/close.svg";
import MailIcon from "../../public/static/svg/mail.svg";
import PasswordIcon from "../../public/static/svg/password.svg";
import KakaoIcon from "../../public/static/svg/kakaoIcon.svg";

import HidePassword from "../../public/static/svg/hidePassword.svg";
import Button from "../common/Button";
import Input from "../common/Input";
import palette from "../../styles/palette";

const Container = styled.div`
     width: 568px;
    padding : 32px;
    height: 460px;
    background-color: white;
    z-index : 11;

    .closeIcon{
        display: block;
        cursor: pointer;
        margin : 0 0 40px auto;
    }

    .input-wrapper{
        position: relative;
        margin-bottom: 16px;
    }

    .sign-up-moal-submit-button-wrapper{
        margin-bottom : 16px;
        padding-bottom : 16px;
        border-bottom: 1px solid ${palette.gray_eb};
    }

    .login-modal-signup{
        color : ${palette.dark_cyan};
        margin-left: 8px;
        cursor: pointer;
    }

    .social-text{
        margin-top : 1.5rem;
        text-align  : center;
    }
    .social-login-wrapper{
        margin-top : 1.5rem;
        display: flex;
        justify-content: space-around;
        
        & img{
            display: block;
            width: 45px;
            height: 45px;
        }
    }
`;

interface IProps {
  closeModal: () => void;
}
const LoginModal: React.FC<IProps> = ({ closeModal }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <Container onSubmit={() => {}}>
      <CloseIcon className="closeIcon" onClick={closeModal} />

      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type="email" icon={<MailIcon />} />

      </div>

      <div className="input-wrapper">
        <Input
          placeholder="비밀번호"
          type={hidePassword ? "password" : "text"}
          icon={hidePassword ? (
            <HidePassword onClick={toggleHidePassword} />
          ) : (
            <PasswordIcon onClick={toggleHidePassword} />
          )
          }
        />
      </div>

      <div className="sign-up-moal-submit-button-wrapper">
        <Button type="submit">로그인</Button>
      </div>
      <p>
        리싸이클 계정이 없으신가요?
        <span className="login-modal-signup">
          회원가입
        </span>
      </p>
      <div className="social-text">
        <p>
          <span>소셜 계정으로 로그인</span>
        </p>
      </div>
      {/* 소셜 로그인 */}
      <div className="social-login-wrapper">
        <KakaoIcon />
        <img src="static/png/naverIcon.png" alt="" />
      </div>
    </Container>
  );
};

export default LoginModal;
