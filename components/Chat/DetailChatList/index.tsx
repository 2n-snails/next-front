import React from "react";
import ChatRoomList from "../ChatRoomList";
import ChatBox from "../ChatRoomList/ChatBox";
import { DetailChatListContainer, Header } from "./style";

const DetailChatList = () => {
  return (
    <DetailChatListContainer>
      <Header>
        {/* 상품정보 */}
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I5KZEwdrqy3WkxUmRLQKGjNeYXdt2o4ju8VOVcuNQ=s32-c-mo"
          alt="유저이미지"
        />
        <span>hyemin</span>
      </Header>

      {/* 채팅내역 */}
      <ChatRoomList />

      {/* 채팅input box */}
      <ChatBox />
    </DetailChatListContainer>
  );
};

export default DetailChatList;
