// import SearchIcon from "@/assets/svg/search.svg";
import React, { useState } from "react";
import HeaderContainer from "./Header.Container";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderContainer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Header;
