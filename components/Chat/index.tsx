import React from "react";
import DMList from "./DMList";
import {
  ChatListStyle,
  ChatNameStyle,
  Chats,
  ChatWrapper,
  MenuScroll,
} from "./style";

const ChatList = () => {
  return (
    // <ChatContainer>
    <ChatWrapper>
      <ChatListStyle>
        <MenuScroll>
          <ChatNameStyle>
            <img
              src="https://lh3.google.com/u/1/ogw/ADea4I4IrPJgQGZQZIUvKDNr-13OGjpW3I9_f_wNkWuC=s32-c-mo"
              alt="프로필이미지"
            />
            <h2>홍길동</h2>
          </ChatNameStyle>

          {/* DM User 리스트 */}
          <DMList />
        </MenuScroll>
      </ChatListStyle>

      {/* 채팅방 */}
      {/* 채팅목록에서 아무 채팅방을 클릭하는 순간 */}
      {/* 그 채팅방으로 이동하면서 UI변경. */}
      <Chats>123</Chats>
    </ChatWrapper>
  );
};

export default ChatList;
