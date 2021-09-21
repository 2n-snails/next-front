import styled from "styled-components";

export const DetailChatListContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* flex-direction, wrap단축속성 */
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 10px;
  margin-bottom: 10px;
  /* box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08); */
  /* border-bottom: 1px solid black; */
  align-items: center;
  background-color: #ffff;
  padding-left: 24px;
  & > img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  & > span {
    display: block;
    padding-left: 24px;
    font-size: 16px;
    font-weight: 600;
  }
`;
