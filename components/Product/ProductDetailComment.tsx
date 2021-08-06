import { Button } from "@/styles/common/Button";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import ReplyIcon from "@/assets/svg/reply.svg";

const CommentsContainer = styled.div`
  h2 {
    color: #808080;
    font-size: 1.2em;
    padding: 1rem 0;
  }
`;

const CommentsInfo = styled.div`
  button {
    margin: 0 1%;
    width: 23%;
  }
  .comments_user_info {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    margin-left: auto;

    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      object-fit: cover;
    }

    p {
      font-size: 1em;
      padding: 0.4rem;
      letter-spacing: 0.1rem;
    }
  }

  .comments_content {
    font-size: 15px;
    padding: 1rem;
    line-height: 1.5;
    letter-spacing: 0.1em;
  }

  .comments-btn {
    float: right;
  }
`;

// type Comments = {
//     id: Number,
//     src?:String,
//     content: String
//     key: React.Key
// }

// interface IProps extends Comments {
//     comments: Array<Comments>;
//  }

interface IProps {
  comments: any;
}

const ProductDetailComment: React.FC<IProps> = ({ comments }) => {
  return (
    <CommentsContainer>
      <h2>상품 문의</h2>
      <div>
        <textarea placeholder="댓글을 입력해주세요." />
        <Button>댓글달기</Button>
      </div>
      {comments.map((comment) => (
        <CommentsInfo key={comment.id}>
          {/* 사용자 정보 */}
          <Link href="#">
            <a href="#">
              <div className="comments_user_info">
                <img
                  src={comment.user.src}
                  alt="댓글유저프로필"
                  role="presentation"
                />
                <p>{comment.user.nickname}</p>
              </div>
            </a>
          </Link>

          <div className="comments_content">
            <p>{comment.content}</p>
          </div>

          <div className="comments-btn">
            <Button color="white">
              <p style={{ color: "black" }}>답글</p>
            </Button>
            <Button color="white">
              <p style={{ color: "black" }}>수정</p>
            </Button>
            <Button color="white">
              <p style={{ color: "black" }}>삭제</p>
            </Button>
            <Button color="white">
              <p style={{ color: "black" }}>신고</p>
            </Button>
          </div>
        </CommentsInfo>
      ))}
    </CommentsContainer>
  );
};

export default ProductDetailComment;
