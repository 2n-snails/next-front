import React, { CSSProperties } from "react";
import { MenuStyle } from "./style";

interface Props {
  style: CSSProperties;
  show: boolean;
  onCloseModal: (e: any) => void;
}
const Menu: React.FC<Props> = ({ children, style, onCloseModal }) => {
  return (
    <MenuStyle>
      <div style={style} />
      {children}
    </MenuStyle>
  );
};

export default Menu;
