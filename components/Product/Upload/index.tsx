import React from "react";
import styled from "styled-components";

const ProductUploadContainer = styled.div`
  max-width: 1200px;
  margin: auto;

  .form-header {
    background-color: aqua;
    h2 {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;

      display: flex;
      align-items: center;
      text-align: center;

      color: #484d50;
    }
  }
  .form-row {
    border-top: 2px solid #cdd0d2;
    padding: 20px 0px;

    display: flex;
    flex-wrap: wrap;

    label {
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #484d50;

      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }

    input {
      border: 1px solid #d9dcdd;
      box-sizing: border-box;
      border-radius: 3px;

      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }

    .form-checkbox-group {
      background-color: #fff;
      display: block;
      margin: 10px 0;
      position: relative;
      width: 200px;

      label {
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
      }

      input {
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
      }
    }
  }

  .form-footer {
    background-color: #e6429c;
  }
`;
const ProductUpload: React.FC = () => {
  // 상의
  // 아우터
  // 하의
  // 원피스/치마
  // 악세서리
  const categoryList = [
    {
      title: "상의",
      id: 1,
      key: "top",
    },
    {
      title: "아우터",
      id: 2,
      key: "jk",
    },
    {
      title: "하의",
      id: 3,
      key: "bottom",
    },
    {
      title: "원피스/치마",
      id: 4,
      key: "sk",
    },
    {
      title: "악세서리",
      id: 5,
      key: "ac",
    },
  ];
  return (
    <ProductUploadContainer>
      <form action="/" method="post">
        <div className="form-header">
          <h2>중고거래 기본정보 작성하기</h2>
        </div>
        <div className="form-body">
          <div className="form-row">
            <label htmlFor="title">상품 이미지</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="title">글 제목</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="title">카테고리</label>
            <div className="form-checkbox-group">
              {categoryList.map((value, index) => (
                <>
                  <label htmlFor={`box-${value.id}`}>
                    <input type="radio" id={`box-${value.id}`} />
                    <span>{value.title}</span>
                  </label>
                </>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="title">거레지역</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="title">가격</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="title">상품 설명</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-footer">등록하기</div>
      </form>
    </ProductUploadContainer>
  );
};

export default ProductUpload;
