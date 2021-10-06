import ProductUpload from "@/components/Product/Upload/Upload.Component";
import React from "react";

const index = () => {
  return <ProductUpload />;
};

export default index;

export async function getServerSideProps() {
  // 소셜 로그인 완료 후 /login 페이지로 이동함.
  // 쿠키 유효기간을 확인함.
  // 로그인 상태를 업데이트함.
  const data = {
    // 쿠키 상태 정보를 추가함.
  };

  return { props: { data } };
}
