import { Button } from "@/styles/common/Button";
import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const ButtonComponent: React.FC<IProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default React.memo(ButtonComponent);
