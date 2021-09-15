import React from "react";
import styled from "styled-components";
import MainLogo from "@/assets/svg/loginLogo.svg";
import Kakao from "@/assets/svg/auth/kakao.svg";
import Naver from "@/assets/svg/auth/naver.svg";
import Link from "next/link";

const SingUpContainer = styled.div`
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
const SocialContainer = styled.div`
  min-width: 320px;
  img {
    width: 500px;
  }
`;
const SingUpPage: React.FC = () => {
  return (
    <SingUpContainer>
      <div className="container">
        <LogoContainer>
          <MainLogo />
        </LogoContainer>
        <SocialContainer>
          <div>
            <Link href="http://localhost:4000/api/v1/users/auth/naver">
              <a>
                <Naver />
              </a>
            </Link>
          </div>
          <div>
            <Link href="http://localhost:4000/api/v1/users/auth/kakao">
              <a>
                <Kakao />
              </a>
            </Link>
          </div>
        </SocialContainer>
      </div>
    </SingUpContainer>
  );
};

export default SingUpPage;
