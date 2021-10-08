import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  width: string | undefined;
}
export const ButtonStyle = styled.button<StyledButtonProps>`
  width: ${({ width }) => width || "100%"};
  height: 48px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  background: ${(props) => props.color};
`;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | undefined;
  children?: React.ReactNode;
}
const Button: React.FC<IProps> = ({ width, children, ...props }) => {
  return (
    <ButtonStyle width={width} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default React.memo(Button);
