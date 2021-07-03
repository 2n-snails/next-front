import React from "react";
import Link from "next/link";

const HeaderContainer = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn, setIsLoggedIn);
  return (
    <>
      <div className="header-logo">
        <Link href="/">
          <a className="header-logo-wrapper">
            {/* <Logo className="header-logo" /> */}
            <img src="/static/png/fullLogo2.png" alt="" />
            {/* <img src="/static/png/logoTitile.png" alt="" width="40%" /> */}
            {/* <LogoTextIcon /> */}
          </a>
        </Link>
      </div>

      <div className="header-list-wrapper">
        <ul className="header-list-main-menu">
          <li>
            <div>{/* <SearchIcon /> */}</div>
          </li>
          <li>
            <div>
              <span>상품</span>
            </div>
          </li>
          <li>
            <div className="outside-click-div">
              <span>Q &amp; A</span>
            </div>
          </li>
          {/* {isLoggedIn && <HeaderAuths />} */}
          {/* {isLoggedIn && <HeaderUserProfile />} */}
        </ul>
      </div>
    </>
  );
};

export default HeaderContainer;
