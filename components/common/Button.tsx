import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  width: string | undefined;
}
export const Button = styled.button<StyledButtonProps>`
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
  children?: React.ReactNode;
  width: string | undefined;
}
const ButtonComponent: React.FC<IProps> = ({ children, width, ...props }) => {
  return (
    <Button width={width} {...props}>
      {children}
    </Button>
  );
};

export default React.memo(ButtonComponent);
