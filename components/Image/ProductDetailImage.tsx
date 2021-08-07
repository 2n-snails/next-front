import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ImageZoom from "./ImageZoom";

const SliderWarp = styled.div`
  position: relative;

  img {
    object-fit: cover;
    border-radius: 8px;
    min-width: 100%;
    color: transparent;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    right: -25px;
    top: 240px;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg)
      no-repeat;
  }
  .slick-prev {
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg)
      no-repeat;
  }
  .slick-arrow {
    width: 11px;
    height: 21px;
    text-indent: -9999px;
  }

  .slick-dots {
    position: absolute;
    bottom: 3px;
    left: 0px;
    right: 20px;
    width: 729px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 8px;
    list-style: none;
    text-align: center;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-blend-mode: multiply;
  }

  .slick-dots {
    button:before {
      content: " ";
      background-color: #fff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: block;
      position: absolute;
      bottom: 0;
      opacity: 0.3;
    }
  }
`;
// 클래스 선택자 전역으로 선택된 slider 값을 바꾸기 위함
const StyleSlider = styled(Slider)`
  .slick-list {
    width: 729px;
  }
`;

const ImgWrapper = styled.div`
  & img {
    width: 100%;
    margin: 0 auto;
  }
`;

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
  };

  const onClickZoom = useCallback(() => {
    setCurrentSlide((prev) => !prev);
  }, []);

  return (
    <SliderWarp>
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
            {currentSlide && <ImageZoom />}
          </ImgWrapper>
        ))}
      </StyleSlider>
    </SliderWarp>
  );
};

export default ProductDetailImage;
