import StarIcon from "@/assets/svg/Detail/start.svg";
import Products from "@/components/Product";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import theme from "@/styles/theme";

const TabsWrapper = styled.ul`
  display: flex;
  margin: 0 15.5rem;
`;

const Tabs = styled.li`
  float: left;
  list-style: none;
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.gray_bb};
  border-bottom: 1px solid ${theme.color.gray_cc};

  &.active {
    color: ${theme.color.blue_aa};
    border-bottom: 3px solid ${theme.color.blue_aa};
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3.625rem;
  margin: 3.5rem 15.5rem 1.5rem;

  .user_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const ProfileImg = styled.img`
  width: 3.625rem;
  height: 3.625rem;
`;

const MyPage: React.FC = () => {
  const [tabId, setTabId] = useState(0);

  const data = useSelector((state: any) => state.products.productsList);

  const onClickTab = (id) => {
    setTabId(id);
  };

  const tabsArray = ["판매물품", "판매완료", "구매내역", "찜한상품", "내정보"];

  return (
    <div>
      <ProfileContainer>
        <ProfileImg src="asdfsadf" alt="프로필" />
        <div className="user_info">
          <span>니트와바트</span>
          <p>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </p>
        </div>
      </ProfileContainer>

      <TabsWrapper>
        {tabsArray.map((title, i) => (
          <Tabs
            key={i}
            className={tabId === i ? "active" : ""}
            onClick={() => onClickTab(i)}
          >
            {title}
          </Tabs>
        ))}
      </TabsWrapper>

      {tabId === 0 ? (
        <div>
          <Products data={data} />
        </div>
      ) : null}
    </div>
  );
};

export default MyPage;
