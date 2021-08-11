import React from "react";
import HeaderContainer from "./Header/Header.Container";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <HeaderContainer />
      <span>{children}</span>
    </>
  );
};

export default Layout;
