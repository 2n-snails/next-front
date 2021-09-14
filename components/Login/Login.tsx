import React from "react";
import styled from "styled-components";
import MainLogo from "@/assets/svg/loginLogo.svg";
import Kakao from "@/assets/svg/auth/kakao.svg";
import Naver from "@/assets/svg/auth/naver.svg";
import Link from "next/link";

const LoginContainer = styled.div`
  text-align: center;
  margin: 5vh 0px;
  .container {
    border: 1px solid #d9dcdd;
    box-sizing: border-box;
    border-radius: 3px;
    height: 90vh;
    padding-top: 50px;
    margin: auto;
    max-width: 480px;
  }
`;
const LogoContainer = styled.div`
  text-align: center;

  image {
    width: 250px;
  }
`;
const LoginFormContainer = styled.div`
  min-width: 320px;
  img {
    width: 500px;
  }
`;
const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <div className="container">
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
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
