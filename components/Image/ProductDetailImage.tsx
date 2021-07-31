import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// 클래스 선택자
const StyleSlider = styled(Slider)``;

const ProductDetailImage = ({ images }) => {
  console.log("images", images);

  // 이미지 캐러셀을 위한 값 저장 번호 index 값 기억
  const [currentSlide, setCurrentSlide] = useState(0);

  // slick용 data 저장
  const [slickData, setSlickData] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const onClickZoom = () => {};
  return (
    <>
      {/* 여기서 이미지를 클릭하면 확대하는 식으로 보여주고 */}
      {/* 첫 번째 페이지에서는 캐러셀이 가능하도록 출려고디야한다. */}
      <Slider {...slickData}>
        {images &&
          images.map((img) => {
            return (
              <div key={img.id}>
                <img
                  src={img.src}
                  alt="상세이미지"
                  role="presentation"
                  onClick={onClickZoom}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default ProductDetailImage;
