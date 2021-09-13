import React from "react";
import styled from "styled-components";
import MainLogo from "@/assets/svg/loginLogo.svg";
import Link from "next/link";

const LoginContainer = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;

  .main_select_box {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <div style={{ textAlign: "center" }}>
        <MainLogo />
      </div>
      <div>
        {" "}
        {/* 로우 */}
        <div>
          <Link href="http://localhost:4000/user/auth/facebook	">
            <img
              src="/static/png/naverLogin.png"
              alt="네이버 아이디로 로그인"
            />
          </Link>
        </div>
        <div>
          <Link href="http://localhost:4000/user/auth/kakao">
            <img
              src="/static/png/kakaoLogin.png"
              alt="카카오 아아디로 로그인"
            />
          </Link>
        </div>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
