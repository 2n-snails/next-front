import styled from "styled-components";

// export const ChatContainer = styled.div`
//   width: 100%;
//   height: 1080px;
//   background-color: white;
// `;

export const ChatWrapper = styled.div`
  display: flex;
  height: 100%;
  /* height: 1080px; */
  /* grow : 1 shrink : 1 basis :0 */
  /* 모든 부분 확장,줄어들기 & 1:1비율 유지 */
  flex: 1;
  /* background-color: red; */
`;

export const ChatListStyle = styled.nav`
  width: 389px;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  color: rgb(188, 171, 188);
  vertical-align: top;
`;

export const ChatNameStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #ffff;
  padding: 0 0 0 8px;
  border-bottom: 1px solid #d9dcdd;
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    padding: 0 16px;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    color: #484d50;

    /* 말줄임 효과 */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const MenuScroll = styled.div`
  height: 100%;
  /* height: calc(100% - 102px); */
  /* background-color: pink; */
  /* 내용이 넘칠 때 스크롤바 표시 */
  overflow-y: auto;
`;

export const Chats = styled.div`
  flex: 1;
`;
