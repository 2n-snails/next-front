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

const ProfileImageSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImageSectionWrapper>
        <ProfileImage>
          <Person />
        </ProfileImage>

        <ButtonComponent name="이미지 업로드" type="button" color="#50cb93">
          <span>이미지 업로드</span>
        </ButtonComponent>

        <ButtonComponent name="이미지 제거" type="button" color="white">
          <span>이미지 제거</span>
        </ButtonComponent>
      </ProfileImageSectionWrapper>
    </ProfileContainer>
  );
};

export default Profile;
