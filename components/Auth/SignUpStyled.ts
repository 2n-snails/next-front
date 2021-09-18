import theme from "@/styles/theme";
import styled from "styled-components";

export const SingUpContainer = styled.div`
  margin: 5vh 0px;

  .box {
    margin: auto;
    height: 90vh;
    max-width: 480px;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;

    border: 1px solid #d9dcdd;
    box-sizing: border-box;
    border-radius: 3px;
  }

  @media only screen and ${theme.mobile} {
    .box {
      border: none;
    }
  }
`;
export const LogoContainer = styled.div`
  width: 250px;
  svg {
    width: 100%;
  }
  image {
    width: 250px;
  }
  @media only screen and ${theme.mobile} {
    width: 180px;
    image {
      width: 180px;
    }
  }
`;
export const SocialContainer = styled.div`
  min-width: 320px;

  div {
    padding-top: 10px;
  }

  @media only screen and ${theme.mobile} {
    /* min-width: 180px; */
    a {
      /* width: 100%; */
      /* rect {
        width: 80%;
        height: auto;
      } */
    }
  }
`;
