// import SearchIcon from "@/assets/svg/search.svg";
import React, { useState } from "react";
import HeaderContainer from "./Header.Container";

// 모든 기능은 HeaderPresenter 에서 처리한다.
const HeaderPresenter: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderContainer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};

export default HeaderPresenter;
