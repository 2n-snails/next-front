import React from "react";
import styled from "styled-components";
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
    background: ${palette.bittersweet};

`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}
const Button:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>{children}</Container>
  );
};

export default React.memo(Button);
