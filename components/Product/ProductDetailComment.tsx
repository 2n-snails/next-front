import { Button } from "@/styles/common/Button";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import ReplyIcon from "@/assets/svg/reply.svg";
import CommentEditIcon from "@/assets/svg/commentEdit.svg";
import CommentTrashIcon from "@/assets/svg/commentTrash.svg";
import SirenIcon from "@/assets/svg/siren.svg";

import styled from "styled-components";

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
  h2 {
    color: #808080;
    font-size: 1.2em;
    padding: 1rem 0;

    span {
      padding: 0 1rem;
      em {
        padding: 0 0.2rem;
        font-weight: 600;
      }
    }
  }

  .comments_input_container {
    .comments_input_info {
      width: 100%;
      padding: 20px;
      height: 80px;
      border: 1px solid rgb(238, 238, 238);

      textarea {
        outline: 0px;
        border: none;
        width: 100%;
        height: 100%;
        resize: none;
        line-height: 1.5;
        font-size: 13px;
      }
    }

    .comments_input_send_info {
      display: flex;
      width: 100%;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1rem;
      border: 1px solid rgb(238, 238, 238);
      border-top: none;

      .comments_input_letter_lengh {
        margin-left: 10px;
        font-size: 12px;
        color: rgb(136, 136, 136);
      }

      .comments_input_btn {
        flex-basis: 70px;
        button {
          width: 100%;
        }
      }
    }
  }
`;

const CommentsInfo = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 16px 0;

  .comments_user_info_container {
    margin-top: 1.5rem;
    margin-left: auto;

    .comments_user_info_detail {
      display: flex;
      flex-direction: center;
      align-items: center;

      img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        object-fit: cover;
      }

      a {
        span {
          font-size: 15px;
          font-weight: 600;
          padding: 0.4rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }

  .comments_content {
    font-size: 15px;
    padding: 1rem 0 2.5rem 0;
    line-height: 1.5;
    letter-spacing: 0.1em;
  }

  .comments_btn_container {
    .comments_btn_info {
      display: flex;
      padding-left: 50%;
      margin-left: auto;
      button {
        font-size: 15px;
        font-weight: 400;
        margin-right: 10px;
        height: 30px;
      }
    }

    @media ${(props) => props.theme.mobile} {
      .comments_btn-info {
        padding-left: 20%;
        width: 300px;
        button {
          font-size: 12px;
        }
      }
    }
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

const areaMaxNumber = 100;

interface IProps {
  comments: any;
}

const ProductDetailComment: React.FC<IProps> = ({ comments }) => {
  const [commentContent, setCommentContent] = useState("");
  const [commentEditText, setCommentEditText] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const commentLength = commentContent.trim().length;
      const commentValid = commentLength >= areaMaxNumber;

      if (commentValid) {
        // eslint-disable-next-line no-alert
        alert("길이초과");
        return false;
      }

      commentContent.trim();
      setCommentContent("");
      // eslint-disable-next-line no-alert
      return alert("댓글입력 성공");
    },
    [commentContent],
  );

  const setTextArea = useCallback((e) => {
    setCommentContent(e.target.value);
  }, []);

  // 댓글 수정
  const commentEdit = useCallback((id) => {
    console.log(id);
    //로그인한 유저와 비교해서 댓글 수정창 열리도록 하기
    setCommentEditText((prev) => !prev);
    if (commentEditText) {
      return <div />;
    }
    return false;
  }, []);

  return (
    <CommentsContainer>
      <h2>
        상품 문의
        <span>
          <em>{comments?.length > 0 ? comments.length : 0}</em>개
        </span>
      </h2>
      {/* 댓글 form */}
      <form onSubmit={onSubmit}>
        <div className="comments_input_container">
          <div className="comments_input_info">
            <label>
              <textarea
                placeholder="댓글을 입력해주세요."
                onChange={setTextArea}
                value={commentContent}
                required
              >
                {commentContent}
              </textarea>
            </label>
          </div>

          <div className="comments_input_send_info">
            <div className="comments_input_letter_lengh">
              <p>
                <span>
                  {commentContent.length}/{areaMaxNumber}
                </span>
              </p>
            </div>
            <div className="comments_input_btn">
              <Button color="#5ebcfb" type="submit">
                등록
              </Button>
            </div>
          </div>
        </div>
      </form>

      {comments.map((comment) => (
        <CommentsInfo key={comment.id}>
          {/* 사용자 정보 */}
          <div className="comments_user_info_container">
            <div className="comments_user_info_detail">
              <img
                src={comment.user.src}
                alt="댓글유저프로필"
                role="presentation"
              />
              <Link href="#">
                <a href="#">
                  <span>{comment.user.nickname}</span>
                </a>
              </Link>
            </div>
          </div>

          {/* 댓글 list */}
          {commentEditText ? (
            <form onSubmit={() => {}}>
              <div className="comments_input_container">
                <div className="comments_input_info">
                  <label>
                    <textarea
                      placeholder="댓글을 입력해주세요."
                      onChange={() => {}}
                      value={comment.content}
                      required
                    >
                      {comment.content}
                    </textarea>
                  </label>
                </div>

                <div className="comments_input_send_info">
                  <div className="comments_input_letter_lengh">
                    <p>
                      <span>
                        {commentContent.length}/{areaMaxNumber}
                      </span>
                    </p>
                  </div>
                  <div className="comments_input_btn">
                    <Button color="#5ebcfb" type="submit">
                      등록
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="comments_content">
              <p>{comment.content}</p>
            </div>
          )}
          <div className="comments_btn_container">
            <div className="comments_btn_info">
              <Button color="white">
                <ReplyIcon width="18px" height="18px" />
              </Button>

              <Button color="white" onClick={() => commentEdit(comment.id)}>
                <CommentEditIcon width="18px" height="18px" />
              </Button>

              <Button color="white">
                <CommentTrashIcon width="18px" height="18px" />
              </Button>
              <Button color="white">
                <SirenIcon width="18px" height="18px" />
              </Button>
            </div>
          </div>
        </CommentsInfo>
      ))}
    </CommentsContainer>
  );
};

export default ProductDetailComment;
