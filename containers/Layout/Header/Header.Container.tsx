// import SearchIcon from "@/assets/svg/search.svg";
import React, { useState } from "react";
import HeaderPresenter from "./Header.Presenter";

// 모든 기능은 HeaderContainer 에서 처리한다.
const HeaderContainer: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <HeaderPresenter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
};

export default HeaderContainer;
