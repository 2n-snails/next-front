import styled from "styled-components";

export const ChatsContainer = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  padding: 2px 0;
  background-color: #ffff;

  &:hover {
    background-color: #eee;
  }

  & .chat-img {
    display: flex;
    width: 36px;
    height: 49px;
    margin-right: 8px;

    & img {
      border-radius: 50%;
      width: 36px;
      height: 36px;
    }
  }

  & .chat-text {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 0%;

    & p {
      font-size: 16px;
      flex: 0 0 100%;
      margin: 0;
    }
  }

  & .chat-user {
    display: flex;
    flex: 0 0 100%;
    align-items: center;

    & > b {
      margin-right: 5px;
    }
    & > span {
      font-size: 12px;
    }
  }

  & a {
    text-decoration: none;
  }
`;
