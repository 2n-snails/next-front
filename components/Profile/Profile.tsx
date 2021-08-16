import ButtonComponent from "@/components/common/Button";
import React from "react";
import styled from "styled-components";
import Person from "@/assets/svg/person.svg";

const ProfileContainer = styled.div`
  width: 100%;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
`;

const ProfileImageSection = styled.section`
  width: 100%;
  height: auto;
  padding: 0 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10em;

  @media ${(props) => props.theme.tablet} {
    padding: 0 10rem;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 2rem;
  }

  button {
    width: 7rem;
    height: 2rem;

    &:last-child {
      color: #50cb93;
    }
  }

  * + * {
    margin-top: 1rem;
  }
`;

const ProfileImage = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 6rem;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroduceSection = styled.section`
  display: flex;
  width: 100%;
  padding: 0 20rem;
  flex-direction: column;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    padding: 0 10rem;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 2rem;
  }
`;

const Username = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;

  .username {
    font-size: 1.3rem;
    font-weight: bold;
  }

  button {
    color: #f8485e;
    width: 4rem;
    font-size: 0.8rem;
    height: 2rem;
    display: inline-flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    margin-left: 0.5rem;
  }
`;

const IntroduceText = styled.div`
  margin-bottom: 2rem;
`;

const EditIntroduce = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #787a91;
    font-size: 0.8rem;
    border: 1px solid lightgray;
    width: 5rem;
    height: 2rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  border: 1px solid lightgray;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImageSection>
        <ProfileImage>
          <Person />
        </ProfileImage>

        <ButtonComponent name="이미지 업로드" type="button" color="#50cb93">
          <span>이미지 업로드</span>
        </ButtonComponent>

        <ButtonComponent name="이미지 제거" type="button" color="white">
          <span>이미지 제거</span>
        </ButtonComponent>
      </ProfileImageSection>

      <IntroduceSection>
        <Username>
          <span className="username">빈티지픽</span>

          <ButtonComponent name="닉네임 수정" type="button" color="white">
            <span>닉네임 수정</span>
          </ButtonComponent>
        </Username>

        <IntroduceText>
          안녕하세요 정품 빈티지 쇼핑몰인 빈티지픽입니다. 2개이상 구매시
          무료배송 3, 4개 구매시 추가할인 들어가며 구입 후 포토후기는 적립금
          지급됩니다 ~~!! 첫 구매시 천원 적립금이 지급됩니다 ~~!!
        </IntroduceText>

        <EditIntroduce>
          <TextArea />
          <ButtonComponent name="소개글 수정" type="button" color="white">
            <span>소개글 수정</span>
          </ButtonComponent>
        </EditIntroduce>
      </IntroduceSection>
    </ProfileContainer>
  );
};

export default Profile;
