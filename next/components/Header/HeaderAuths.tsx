import React from "react";
import useModal from "../../hooks/useModal";
import AuthModal from "../auth/AuthModal";

const HeaderAuths: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();

  return (
    <>
      <li>
        <div className="header-auth-buttons">
          {/* <button type="button" className="header-sign-up-button" onClick={openModal}>
            회원가입
          </button> */}
          <button
            type="button"
            className="header-login-buton"
            onClick={openModal}
          >
            로그인
          </button>
        </div>
      </li>
      {/* 모달 */}
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
};

export default HeaderAuths;
