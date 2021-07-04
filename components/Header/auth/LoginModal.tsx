import React, { useState } from "react";
import ButtonComponent from "@/components/common/Button";
import { LoginModalContainer } from "@/styles/common/LoginModal";
import CloseIcon from "@/assets/svg/close.svg";
import MailIcon from "@/assets/svg/mail.svg";
import PasswordIcon from "@/assets/svg/password.svg";
import KakaoIcon from "@/assets/svg/kakaoIcon.svg";
import HidePassword from "@/assets/svg/hidePassword.svg";
import InputComponent from "@/components/common/Input";

interface IProps {
  closeModal: () => void;
}
const LoginModal: React.FC<IProps> = ({ closeModal }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <LoginModalContainer onSubmit={() => {}}>
      <CloseIcon className="closeIcon" onClick={closeModal} />

      <div className="input-wrapper">
        <InputComponent
          placeholder="이메일 주소"
          type="email"
          icon={<MailIcon />}
        />
      </div>

      <div className="input-wrapper">
        <InputComponent
          placeholder="비밀번호"
          type={hidePassword ? "password" : "text"}
          icon={
            hidePassword ? (
              <HidePassword onClick={toggleHidePassword} />
            ) : (
              <PasswordIcon onClick={toggleHidePassword} />
            )
          }
        />
      </div>

      <div className="sign-up-moal-submit-button-wrapper">
        <ButtonComponent type="submit">로그인</ButtonComponent>
      </div>
      <p>
        리싸이클 계정이 없으신가요?
        <span className="login-modal-signup">회원가입</span>
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
    </LoginModalContainer>
  );
};

export default LoginModal;
