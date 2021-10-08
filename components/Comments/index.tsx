import React, { useState } from "react";
import Link from "next/link";
import StarIcon from "@/assets/svg/Detail/start.svg";
import { Button } from "@/styles/common/Button";
import TextArea from "../common/TextArea";
import SingleComment from "./SingleComment";

interface Props {
  comment: any;
}

const Comments: React.FC<Props> = ({ comment }) => {
  const [openReply, setOpenReply] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const onClick = () => {
    setOpenReply((prev) => !prev);
  };
  return (
    <div className="detail_comment_wrapper">
      <Link href="/">
        <a>
          <img src={comment.user.src} alt="" />
        </a>
      </Link>
      <div className="detail_comment_user_contents">
        <div className="detail_comment_user_profile">
          <span>{comment.user.nickname}</span>
          <span> 1시간전</span>
        </div>

        <div>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>

        <div>
          <div>
            <p className="detail_comment_user_content">{comment.content}</p>
          </div>
          <div className="detail_comment_reply">
            <span onClick={onClick}>답글쓰기</span>
            <span>답글보기</span>
            {/* 답글 보기를 누르면 조건을 검사해서 여기서 해당하는 답글을 가져오기 */}
            {/* 답글 조건 : response Id === 현재 comment.uesr.id 가 있으면 map으로 뿌려주기 */}
            {/* <SingleComment /> */}
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {openReply && (
            <div className="detail_comment_enter">
              <TextArea minRows={1} maxRows={2} />
              <button type="button">입력</button>
            </div>
          )}
        </form>
      </div>
      <div className="detail_comment_fix">
        <span>수정</span>
        <span>삭제</span>
      </div>
    </div>
  );
};

export default Comments;
