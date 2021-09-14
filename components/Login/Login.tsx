import React from "react";
import styled from "styled-components";
import MainLogo from "@/assets/svg/loginLogo.svg";
import Kakao from "@/assets/svg/auth/kakao.svg";
import Naver from "@/assets/svg/auth/naver.svg";
import Link from "next/link";

const LoginContainer = styled.div`
  text-align: center;
`;
const LogoContainer = styled.div`
  margin: 60px 0px;
`;
const LoginFormContainer = styled.div`
  text-align: center;
  min-width: 320px;
  div {
    text-align: center;
  }
  img {
    width: 500px;
  }
`;
const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <LogoContainer>
        <MainLogo />
      </LogoContainer>
      <LoginFormContainer>
        <div>
          <Link href="http://localhost:4000/user/auth/facebook">
            <a>
              <Naver />
            </a>
          </Link>
        </div>
        <div>
          <Link href="http://localhost:4000/user/auth/kakao">
            <a>
              <Kakao />
            </a>
          </Link>
        </div>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginPage;
