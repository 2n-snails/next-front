
import React from "react";
import styled from "styled-components";
import Star from "@/assets/svg/star.svg";

const UserInfoContainer = styled.div`
    display: flex;
    width: 20rem;
    height: 6rem;
    margin-top: 2.5rem;
    margin-left: 12rem;


    .user_info_img img {
        display: block;
        object-fit: cover;
        width: 5rem;
        height: 5rem;
        display: block;
        border-radius: 50%;
        margin-top: 5px;
        margin-right: 0.5rem;
      }

      .user_info {
          display: flex;
          flex-direction: column;
          font-size: 14px;
          padding: 0.5rem;
          position: relative;

          p {
              font-size:18px;
              font-weight: 600;
          }

          .user_info_star {
            margin-top:0.25rem;
          }
      }

      .user_info_divider{
        position: absolute;
        margin-top:6.5rem;
          width: 40rem;
          height: 1px;
          background-color:  ${({ theme }) => theme.color.gray_e5};
    }

    @media ${(props) => props.theme.mobile} {
        width: 20rem;
        height: 2rem;
        margin-top: 1rem;
        margin-left: 0rem;

        .user_info_divider{
            width: 20rem;
        }
      }

      @media ${(props) => props.theme.tablet} {
        width: 20rem;
        height: 4rem;
        margin-top: 2rem;
      }
`;

interface IProps {
  data: any;
}

const UserInfo: React.FC<IProps> = ({ data }) => {

  return (
    <UserInfoContainer>

        <figure className="user_info_img">
             <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="유저 이미지" />
         </figure>

         <div className="user_info">
            <p >허스키</p>
            <span>안녕하세요. 말하는 허스키입니다.</span>

            <div className="user_info_star">
            <Star className="star_icon" />
            <Star className="star_icon" />
            <Star className="star_icon" />
            <Star className="star_icon" />
            <Star className="star_icon" />
            </div>
         </div>

         <div className="user_info_divider"></div>

    </UserInfoContainer>
  );
};

export default UserInfo;
