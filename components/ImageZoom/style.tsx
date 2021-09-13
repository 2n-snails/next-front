import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderStyle = styled(Slider)`
  .slick-next {
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-right-134c53f44716c3bef227ec30da385b4b09c9c068d339a617a23093718f379d02.svg)
      no-repeat;
  }

  .slick-next:before {
    content: "";
  }

  .slick-prev {
    background: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/icon-slider-left-4c0e713bfa2cd12bd959e6dd9ef456cd6fc094953c41e605f6b9a59bc1680686.svg)
      no-repeat;
  }

  .slick-prev:before {
    content: "";
  }
`;

export const ImageZoomContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 9999;
`;

export const SliderZoomStyle = styled(Slider)`
  .slick-slide {
    display: inline-block;
  }

  .ant-card-cover {
    transform: inline-block;
  }
  img {
    width: 50%;
    height: 50%;
  }
`;

export const ZoomHeader = styled.header`
  height: 44px;
  background-color: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const SlickWrapper = styled.div`
  padding: 50px;
  width: 100%;
  height: 100%;
  background-color: #090909;
`;

export const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;
