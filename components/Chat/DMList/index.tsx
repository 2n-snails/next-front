import NavLink from "@/components/NavLink";
import React from "react";
import { DMStyleContainer } from "./style";

const DMList = () => {
  // 임의의 데이타 만들어서 for문 돌리기

  const chatUserList = Array.from(Array(20), (_, i) => {
    return {
      id: i + 1,
      name: `홍길동+${i}`,
    };
  });

  // 이름을 누르면 해당 유저의 채팅방으로 들어가기
  // 온라인 여부를 보여줄까
  return (
    <DMStyleContainer>
      {chatUserList.map((user, i) => (
        <div key={i}>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I5KZEwdrqy3WkxUmRLQKGjNeYXdt2o4ju8VOVcuNQ=s32-c-mo"
            alt="유저이미지"
          />
          <div>
            <NavLink
              key={i}
              activeClassName="selected"
              href={`/workspace/message/${user.id}`}
            >
              <div>
                <span>{user.name}</span>
                <p className="chat_content">
                  안녕하세요 언제
                  구매했나요ssssssssssssssssㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      ))}
    </DMStyleContainer>
  );
};

export default DMList;
