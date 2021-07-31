import React, { useState,useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import ImageZoom from "./ImageZoom";


// 클래스 선택자 전역으로 선택된 slider 값을 바꾸기 위함
const StyleSlider = styled(Slider)`

    .slick-list{
        width : 300px;
    }
    .slick-prev, .slick-next{
        background : grey;
    }
`;

const ImgWrapper = styled.div`
    & img{
        width: 100%;
        margin : 0 auto;
    }
`


const ProductDetailImage = ({ images }) => {

  // 이미지 캐러셀을 위한 값 저장 번호 index 값 기억
  const [currentSlide, setCurrentSlide] = useState(false);

  // slick용 data 저장
    const slickData = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const onClickZoom = useCallback(() => {
        setCurrentSlide(prev => !prev);

    },[]);

  return (
              <StyleSlider {...slickData}>
              {images.map((imgData) => (
                  <ImgWrapper>
                        <img
                        src={imgData.src}
                        alt="상세이미지"
                        role="presentation"
                        onClick={onClickZoom}
                      />
                      {/* 이미지를 클릭했을 경우 팝업 */}
                      {currentSlide  && <ImageZoom />}
                      </ImgWrapper>
              ))}
              </StyleSlider>
  );
};

export default ProductDetailImage;
