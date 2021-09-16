// import { useRouter } from "next/dist/client/router";
import { NextPage } from "next";
import React from "react";
import DetailCahtList from "@/components/Chat/DetailChatList";

// 기본적으로 채팅을 클릭하면 맨 위의 채팅이 클린된 상태로 나오게끔 만들어야한다.
// SSR적용해서 해당 채팅내용 가져오게끔
const index: NextPage = () => {
  // const { query } = useRouter();
  // 해당 user의 채팅 기록을 가져온다
  // const chatDetail = useSelector((state) => state.chat.chatDetailList);
  // 해당 user의
  // const detailData = chatDetail.filter(chat => chat.userId === query.id);

  // 채팅 내용이 없으면 채팅 내용을 보여주지 않는다.
  // if (!detailData) {
  //   return null;
  // }

  return <DetailCahtList />;
};

export default index;
