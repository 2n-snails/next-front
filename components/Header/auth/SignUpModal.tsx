import React, { useState } from "react";
import { SignUpModalContainer } from "@/styles/Header/SignUp";
import CloseIcon from "@/assets/svg/close.svg";
import InputComponent from "@/components/common/Input";
import MailIcon from "@/assets/svg/mail.svg";
import PasswordIcon from "@/assets/svg/password.svg";
import PersonIcon from "@/assets/svg/person.svg";
import HidePassword from "@/assets/svg/hidePassword.svg";
import ButtonComponent from "@/components/common/Button";

interface IProps {
  closeModal: () => void;
}

const SignUpModal: React.FC<IProps> = ({ closeModal }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <SignUpModalContainer onSubmit={() => {}}>
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
          placeholder="닉네임"
          type="text"
          icon={<PersonIcon />}
        />
      </div>
      <div className="input-wrapper">
        <InputComponent
          placeholder="주소"
          type="text"
          icon={<PasswordIcon />}
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

      <div>
        <textarea />
      </div>
      <div className="sign-up-moal-submit-button-wrapper">
        <ButtonComponent type="submit">가입하기</ButtonComponent>
      </div>
    </SignUpModalContainer>
  );
};

export default SignUpModal;
