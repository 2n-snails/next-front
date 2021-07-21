import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const Container = styled.button`
    width: 100%;
    height: 48px;
    border : none;
    border-radius: 4px;
    color:white;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    ${(props) => (props.color ? css`background : ${props.color};` : css`background:${palette.bittersweet}`)}
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  text: string;
}
const Button:React.FC<IProps> = ({ children, text, color, ...props }) => {
  return (
    <Container color={color} {...props}>{text}</Container>
  );
};

export default React.memo(Button);
