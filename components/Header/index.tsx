import React from "react";
import MainLogo from "@/assets/svg/Main/Logo/main_logo.svg";
import SearchBarIcon from "@/assets/svg/Main/searchbar.svg";
import HeartIcon from "@/assets/svg/Main/heart.svg";
import SellIcon from "@/assets/svg/Main/sell.svg";
import ProfileIcon from "@/assets/svg/Main/profile.svg";
import Link from "next/link";
import {
  HeaderContainer,
  HeaderInfo,
  HeaderItems,
  HeaderNavigator,
} from "./style";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderItems>
        {/*  */}
        <div>
          <Link href="/">
            <a>
              <MainLogo />
            </a>
          </Link>
        </div>

        {/*  */}
        <div className="search-icon">
          <input type="text" />
          <SearchBarIcon />
        </div>

        {/*  */}
        <HeaderInfo>
          <button type="button">
            <ProfileIcon />
          </button>

          <button type="button">
            <HeartIcon />
          </button>

          <button type="button">
            <SellIcon />
          </button>
        </HeaderInfo>
      </HeaderItems>

      {/* nav */}
      <HeaderNavigator>
        <div className="header-nav-wrapper">
          <ul>
            <li>
              <Link href="/">
                <a>상의</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>하의</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>아우터</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>원피스/치마</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>ACC</a>
              </Link>
            </li>
          </ul>
        </div>
      </HeaderNavigator>
    </HeaderContainer>
  );
};

export default Header;
