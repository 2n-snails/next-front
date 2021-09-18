import SignUp from "@/components/Auth/SignUp";
import React from "react";
import cookies from "next-cookies";
import { NextPageContext } from "next";

const index = (props) => {
  return <SignUp />;
};

export async function getServerSideProps(ctx: NextPageContext) {
  // TODO: 소셜 로그인 완료 후 /auth/signup 페이지로 이동함.

  // TODO: 쿠키 가져옴
  const cookie = cookies(ctx);

  // TODO: API를 던져 사용저 장보를 Redux에 추가함 (SWR로 요청하면 넣으면 안해도 되려나)

  // TODO: 쿠키 유효기간을 확인해서 일정 시간내에만 API 요청을 보냄(리소스 최소화)

  return { props: cookie };
}

export default index;
