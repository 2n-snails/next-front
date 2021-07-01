import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import HamburgerIcon from '../public/static/svg/hamburgerIcon.svg';
import ProfileImg from '../public/static/svg/profileImg.svg';

const HeaderUserProfile: React.FC = () => {
  //* 유저메뉴 열고,닫힘 여부
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isUsermenuOpened) {
          setIsUsermenuOpened(false);
        }
      }}
    >
      <li>
        <button
          className="header-user-profile"
          type="button"
          onClick={() => setIsUsermenuOpened((prev) => !prev)}
        >
          <HamburgerIcon />

          {/* 나중에 밑에 Img태그로 대체 */}
          <ProfileImg className="header-user-profile-image" />
          {/* <img
            src=""
            className=""
            alt=""
          /> */}
        </button>
      </li>

      {isUsermenuOpened && (
        <ul className="header-usermenu">
          <li>
            <Link href="/user/home">
              <a href="#" onClick={() => setIsUsermenuOpened(false)}>
                마이페이지
              </a>
            </Link>
          </li>

          <div className="header-usermenu-divider" />
          <li role="presentation" onClick={() => {}}>
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
