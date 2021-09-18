import React from "react";
import styled from "styled-components";
import MainLogo from "@/assets/svg/loginLogo.svg";
import Kakao from "@/assets/svg/auth/kakao.svg";
import Naver from "@/assets/svg/auth/naver.svg";
import Link from "next/link";
import {
  LogoContainer,
  SingUpContainer,
  SocialContainer,
} from "./SignUpStyled";

const SingUp: React.FC = () => {
  return (
    <SingUpContainer>
      <div className="box">
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

export default SingUp;
