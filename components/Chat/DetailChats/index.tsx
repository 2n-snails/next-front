import React from "react";
import { ChatsContainer } from "./style";

const DetailChats = () => {
  return (
    <ChatsContainer>
      <div className="chat-img">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I5KZEwdrqy3WkxUmRLQKGjNeYXdt2o4ju8VOVcuNQ=s32-c-mo"
          alt="유저이미지"
        />
      </div>
      {/* 채팅들 */}
      <div className="chat-text">
        <div className="chat-user">
          <b>홍길동</b>
          <span>2021-05-05 5시33분</span>
        </div>
        <p>
          안녕하세요 채팅내역입니다.gfgggggggggggggggggggggggggg안녕하세요
          채팅내역입니다.gfgggggggggggggggggggggggggg
        </p>
      </div>
    </ChatsContainer>
  );
};

export default DetailChats;
