import React from "react";
import DetailChats from "../DetailChats";

import { ChatRoomContainer, Section } from "./style";

// 채팅방 내용
const ChatRoomList = () => {
  return (
    <ChatRoomContainer>
      <Section>
        {/* 채팅들 뿌려주기 */}
        {Array.from(Array(20), () => {
          return <DetailChats />;
        })}
      </Section>
    </ChatRoomContainer>
  );
};

export default ChatRoomList;
