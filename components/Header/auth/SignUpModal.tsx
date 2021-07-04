import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../../public/static/svg/close.svg";
import MailIcon from "../../../public/static/svg/mail.svg";
import PasswordIcon from "../../../public/static/svg/password.svg";
import PersonIcon from "../../../public/static/svg/person.svg";
import HidePassword from "../../../public/static/svg/hidePassword.svg";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Container = styled.div`
  width: 568px;
  padding: 32px;
  height: 614px;
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
`;

interface IProps {
  closeModal: () => void;
}

const SignUpModal: React.FC<IProps> = ({ closeModal }) => {
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
        <Input placeholder="닉네임" type="text" icon={<PersonIcon />} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="주소" type="text" icon={<PasswordIcon />} />
      </div>
      <div className="input-wrapper">
        <Input
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
        <Button type="submit">가입하기</Button>
      </div>
    </Container>
  );
};

export default SignUpModal;
