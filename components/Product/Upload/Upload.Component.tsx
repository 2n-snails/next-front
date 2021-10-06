import Dropzone from "@/components/common/DropzoneSquare";
import Compressor from "compressorjs";
import React, { useState } from "react";
import { categoryList } from "./category.json";
import {
  ProductCategory,
  ProductUploadContainer,
  ProductImageUploadPreview,
} from "./Upload.Styles";

// 리베이스 테스트
const ProductUpload: React.FC = () => {
  // 선택된 상위 카테고리를 확인함.
  const [category, setCategory] = useState<number>(0);
  const handleChangeCategory = (value: number) => {
    setCategory(value);
  };

  // 선택된 하위 카테고리를 확인함.
  const [childCategory, setChildCategory] = useState<number>(0);
  const handleChangeChildCategory = (value: number) => {
    setChildCategory(value);
  };

  // 업로드한 이미지를 배열에 담아 프리뷰와 FormData로 관리함.
  const [imageList, setImageList] = useState([]);

  // TODO: 파일을 못 읽어옴.
  const handleUploadImage = (e) => {
    const { files } = e.dataTransfer;
    const file = files && files[0];

    if (!file) {
      return;
    }
    const uploadImageList = [...imageList];

    // eslint-disable-next-line no-new
    new Compressor(file, {
      quality: 0.9,
      success(result: any) {
        const reader = new FileReader();
        reader.onload = (event): void => {
          uploadImageList.push(event.target.result);
        };
        if (e.target.files) {
          reader.readAsDataURL(e.target.files[0]);
        } else {
          // 이미지 파일 바이너리 변경 작업이 필요함.
          console.log(e.dataTransfer.files[0]);
          reader.readAsDataURL(e.dataTransfer.files[0]);
        }

        const formData = new FormData();
        formData.append("file", result, result.name);
        // next 에서 처리할 건데.
        // 상품 업로드 할 때 S3에 업로드 함.
        // axios.post("/api/s3-upload", formData).then(() => {
        //   console.log("Upload success");
        // });
        console.log(formData);
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

  const onFilesAdded = (files) => {
    console.log(files);
    // this.setState((prevState) => ({
    //   files: prevState.files.concat(files),
    // }));
  };
  return (
    <ProductUploadContainer>
      <form action="/" method="post">
        <div className="form-header">
          <h2>중고거래 기본정보 작성하기</h2>
        </div>
        <div className="form-body">
          <div className="form-row">
            {/* form-label 은 우측에 위치함  */}
            <div className="form-label">
              <label className="form-label" htmlFor="title">
                상품 이미지
              </label>
            </div>
            {/* form-field 는 좌측에 위치함  */}
            <div className="form-field">
              <Dropzone onFilesAddedProps={onFilesAdded} disabled={false} />
              {imageList.map((value, index) => {
                return (
                  <ProductImageUploadPreview key={index}>
                    <img width="200px" src={value} alt={index.toString()} />
                  </ProductImageUploadPreview>
                );
              })}
            </div>
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
