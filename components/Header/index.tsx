import React, { useState } from "react";
import MainLogo from "@/assets/svg/Main/Logo/main_logo.svg";
import SearchBarIcon from "@/assets/svg/Main/searchbar.svg";
import HeartIcon from "@/assets/svg/Main/heart.svg";
import SellIcon from "@/assets/svg/Main/sell.svg";
import Link from "next/link";
import ProfileIcon from "@/assets/svg/Main/profile.svg";
import ChatIcon from "@/assets/svg/Main/chat.svg";
import SellHomeIcon from "@/assets/svg/Main/myhome.svg";

import {
  HeaderContainer,
  HeaderInfo,
  HeaderItems,
  HeaderNavigator,
} from "./style";
import { MenuStyle } from "../Menu/style";

const Header: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const onClickUserProfile = () => {
    setShowUserMenu((prev) => !prev);
  };
  const onClickClose = (e) => {
    setShowUserMenu((prev) => !prev);
  };

  const onCloseModal = (e) => {
    setShowUserMenu(false);
  };
  return (
    <HeaderContainer>
      <HeaderItems>
        <div>
          <Link href="/">
            <a>
              <MainLogo />
            </a>
          </Link>
        </div>

        <div className="search-icon">
          <input type="text" />
          <SearchBarIcon />
        </div>

        <HeaderInfo>
          <button type="button">
            <SellIcon />
          </button>

          <button type="button">
            <HeartIcon />
          </button>

          <button type="button" onClick={onClickClose}>
            <ProfileIcon />
          </button>
          {showUserMenu && (
            <MenuStyle>
              <ul>
                <li>
                  <Link href="#">
                    <a>
                      <ChatIcon />
                      <span>채팅</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a>
                      <SellHomeIcon />
                      <span>내 상점</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <a>
                      <ProfileIcon />
                      <span>로그아웃</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </MenuStyle>
          )}
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
