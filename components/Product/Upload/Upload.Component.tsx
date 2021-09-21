import Compressor from "compressorjs";
import React, { useState } from "react";
import { categoryList } from "./category.json";
import {
  ProductCategory,
  ProductUploadContainer,
  ProductUploadGrid,
  ProductUploadImage,
} from "./Upload.Styles";

const ProductUpload: React.FC = () => {
  // 선택된 카테고리를 확인함.
  const [category, setCategory] = useState<number>(0);
  const handleChangeCategory = (value: number) => {
    setCategory(value);
  };

  // 선택된 카테고리를 확인함.
  const [childCategory, setChildCategory] = useState<number>(0);
  const handleChangeChildCategory = (value: number) => {
    setChildCategory(value);
  };

  // 업로드한 이미지를 목록에 담음.
  const [imageList, setImageList] = useState([]);
  const handleUploadImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const uploadImageList = [...imageList];

    // eslint-disable-next-line no-new
    new Compressor(file, {
      quality: 0.9,
      success(result: any) {
        const reader = new FileReader();
        reader.onload = function (event): void {
          uploadImageList.push(event.target.result);
        };
        // // read the image file as a data URL.
        reader.readAsDataURL(e.target.files[0]);

        const formData = new FormData();
        formData.append("file", result, result.name);
        // next 에서 처리할 건데.
        // axios.post("/api/s3-upload", formData).then(() => {
        //   console.log("Upload success");
        // });
      },
      error(err) {
        console.log(err.message);
      },
    });

    // lazy를 주기 위한 처리
    setTimeout(() => {
      setImageList(uploadImageList);
    }, 1500);
  };

  return (
    <ProductUploadContainer>
      <form action="/" method="post">
        <div className="form-header">
          <h2>중고거래 기본정보 작성하기</h2>
        </div>
        <div className="form-body">
          <div className="form-row">
            <div className="form-title">
              <label className="form-label" htmlFor="title">
                상품 이미지
              </label>
            </div>
            <ProductUploadImage
              type="file"
              formEncType="multipart/form-data"
              onChange={(e) => handleUploadImage(e)}
            />
            {imageList.map((value, index) => {
              return (
                <ProductUploadGrid key={index}>
                  <img width="200px" src={value} alt={index.toString()} />
                </ProductUploadGrid>
              );
            })}
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
