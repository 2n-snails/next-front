import React, { useState } from "react";

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
const ProductCategory = styled.div<{ select: boolean }>`
  background-color: ${(props) => (props.select ? "aqua" : "none")};
`;
const ProductUpload: React.FC = () => {
  const [category, setCategory] = useState<number>(0);
  const [childCategory, setChildCategory] = useState<number>(0);

  const handleChangeCategory = (value: number) => {
    setCategory(value);
  };

  const handleChangeChildCategory = (value: number) => {
    setChildCategory(value);
  };
  const categoryList = [
    {
      title: "상의",
      id: 1,
      key: "top",
      children: [
        {
          title: "top_긴팔 셔츠",
          id: 1,
          key: "top_sh",
        },
        {
          title: "top_후디",
          id: 1,
          key: "top_hu",
        },
        {
          title: "top_맨투맨",
          id: 1,
          key: "top_men",
        },
        {
          title: "top_니트/스웨터",
          id: 1,
          key: "top_nt",
        },
        {
          title: "top_가디건",
          id: 1,
          key: "top_ga",
        },
      ],
    },
    {
      title: "아우터",
      id: 2,
      key: "jk",
      children: [
        {
          title: "jk_긴팔 셔츠",
          id: 1,
          key: "jk_sh",
        },
        {
          title: "jk_후디",
          id: 1,
          key: "jk_hu",
        },
        {
          title: "jk_맨투맨",
          id: 1,
          key: "jk_men",
        },
        {
          title: "jk_니트/스웨터",
          id: 1,
          key: "jk_nt",
        },
        {
          title: "jk_가디건",
          id: 1,
          key: "jk_ga",
        },
      ],
    },
    {
      title: "하의",
      id: 3,
      key: "bottom",
      children: [
        {
          title: "bottom_긴팔 셔츠",
          id: 1,
          key: "bottom_sh",
        },
        {
          title: "bottom_후디",
          id: 1,
          key: "bottom_hu",
        },
        {
          title: "bottom_맨투맨",
          id: 1,
          key: "mbottom_en",
        },
        {
          title: "bottom_니트/스웨터",
          id: 1,
          key: "bottom_nt",
        },
        {
          title: "bottom_가디건",
          id: 1,
          key: "bottom_ga",
        },
      ],
    },
    {
      title: "원피스/치마",
      id: 4,
      key: "sk",
      children: [
        {
          title: "sk_긴팔 셔츠",
          id: 1,
          key: "sk_sh",
        },
        {
          title: "sk_후디",
          id: 1,
          key: "sk_hu",
        },
        {
          title: "sk_맨투맨",
          id: 1,
          key: "msk_en",
        },
        {
          title: "sk_니트/스웨터",
          id: 1,
          key: "sk_nt",
        },
        {
          title: "sk_가디건",
          id: 1,
          key: "sk_ga",
        },
      ],
    },
    {
      title: "악세서리",
      id: 5,
      key: "ac",
      children: [
        {
          title: "ac 긴팔 셔츠",
          id: 1,
          key: "ac_sh",
        },
        {
          title: "ac 후디",
          id: 1,
          key: "ac_hu",
        },
        {
          title: "ac 맨투맨",
          id: 1,
          key: "ac_men",
        },
        {
          title: "ac 니트/스웨터",
          id: 1,
          key: "ac_nt",
        },
        {
          title: "ac 가디건",
          id: 1,
          key: "ac_ga",
        },
      ],
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
            <label className="form-label" htmlFor="title">
              상품 이미지
            </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="title">
              글 제목
            </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="title">
              카테고리
            </label>
            <div className="form-checkbox-group">
              {categoryList.map((value, index) => (
                <ProductCategory
                  select={categoryList[category] === categoryList[index]}
                >
                  <label htmlFor={value.key} key={value.key}>
                    <input
                      type="radio"
                      value={value.title}
                      id={value.key}
                      name="top_category"
                      onChange={() => handleChangeCategory(index)}
                    />
                    <span>{value.title}</span>
                  </label>
                </ProductCategory>
              ))}
            </div>
            <div className="form-checkbox-group">
              {categoryList[category].children.map((value, index) => (
                <ProductCategory
                  select={
                    categoryList[category].children[index] ===
                    categoryList[category].children[childCategory]
                  }
                >
                  <label htmlFor={value.key} key={value.key}>
                    <input
                      id={value.key}
                      value={value.title}
                      name="bottom_category"
                      type="radio"
                      onChange={() => handleChangeChildCategory(index)}
                    />
                    <span>{categoryList[category].children[index].title}</span>
                  </label>
                </ProductCategory>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="title">
              거레지역
            </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="title">
              가격
            </label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="title">
              상품 설명
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="form-footer">등록하기</div>
      </form>
    </ProductUploadContainer>
  );
};

export default ProductUpload;
