import React, { useState } from "react";
import { ProductDetailImageContainer } from "../Product/Detail/style";
import {
  CloseButton,
  ImageWrapper,
  ImageZoomContainer,
  SlickWrapper,
  SliderStyle,
  SliderZoomStyle,
  ZoomHeader,
} from "./style";

interface Props {
  Images: any;
}
const ImageZoom: React.FC<Props> = ({ Images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [onZoom, setOnZoom] = useState(false);

  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    arrow: false,
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <ProductDetailImageContainer>
      <SliderStyle {...settings}>
        {Images.map((image, i) => (
          <div onClick={() => setOnZoom((prev) => !prev)}>
            <img src={image.src} alt="thumbnailImg" />
          </div>
        ))}
      </SliderStyle>

      {/* 이미지 확대 시 */}
      {onZoom && (
        <ImageZoomContainer>
          <ZoomHeader>
            <h1>상세 이미지</h1>
          </ZoomHeader>
          <CloseButton onClick={() => setOnZoom((prev) => !prev)}>
            X
          </CloseButton>
          <SlickWrapper>
            <SliderZoomStyle {...settings}>
              {Images.map((image, i) => (
                <ImageWrapper>
                  <img src={image.src} alt="thumbnailImg" />
                </ImageWrapper>
              ))}
            </SliderZoomStyle>
          </SlickWrapper>
        </ImageZoomContainer>
      )}
    </ProductDetailImageContainer>
  );
};

export default ImageZoom;
