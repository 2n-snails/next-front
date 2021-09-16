import styled from "styled-components";

export const DMStyleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffff;

  & > div {
    display: flex;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #f2f3f4;
    padding: 16px 16px;

    & > img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }

    & > div {
      padding: 0 16px;

      & > div {
        & > span {
          font-size: 14px;
          color: #484d50;
        }
        & > p {
          width: 300px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #81898e;
        }
      }
    }
  }
`;
