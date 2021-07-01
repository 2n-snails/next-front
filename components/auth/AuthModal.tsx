import React from 'react';
import SignUpModal from './SignUpModal';

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  // 회원가입 / 로그인 모드에 따라서 모달 분기

  return (
    <>
      <SignUpModal closeModal={closeModal} />
      {/* {authMode === "login" && <div>로그인</div>} */}
      {/* <LoginModal closeModal={closeModal} /> */}
    </>
  );
};

export default AuthModal;
