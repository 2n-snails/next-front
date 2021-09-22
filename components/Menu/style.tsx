import theme from "@/styles/theme";
import styled from "styled-components";

export const MenuStyle = styled.div`
  position: absolute;
  width: 125px;
  height: 180px;
  top: 50px;
  left: 50%;
  border-radius: 8px;
  border: 1px solid ${theme.color.greyscale_2};
  background-color: white;

  & > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #d9dcdd;

      & span {
        font-size: 15px;
        padding: 0 13px;
        font-weight: 500;
        color: ${theme.color.primary_6};
      }
    }
  }
`;
