import styled from "styled-components";

export const ProductUploadContainer = styled.div`
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
    }
    .form-label {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }

    input:text {
      border: 1px solid #d9dcdd;
      box-sizing: border-box;
      border-radius: 3px;

      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }

    .form-checkbox-group {
      background-color: #fff;
      position: relative;
      width: 200px;

      border: 1px solid #d9dcdd;
      box-sizing: border-box;
      border-radius: 0px 3px 3px 0px;
      padding: 10px;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      label: {
        min-width: 100%;
      }

      input {
        display: none;
      }
    }
  }

  .form-footer {
    background-color: #e6429c;
  }
`;
export const ProductCategory = styled.div<{ select: boolean }>`
  background-color: ${(props) => (props.select ? "aqua" : "none")};
`;

export const ProductImageUploadField = styled.div`
  background-color: aqua;
  margin: auto;
  height: 200px;
  width: 200px;
`;
// 파일 업로드 Form 으로 사용 하였으나,
// useRef 로 처리할 예정
// export const ProductUploadImage = styled.input`
//   height: 200px;
//   width: auto;
// `;

export const ProductImageUploadPreview = styled.div`
  height: 200px;
  width: auto;
`;
