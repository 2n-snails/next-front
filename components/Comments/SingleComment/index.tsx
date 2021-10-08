import React from "react";
import Link from "next/link";

interface Props {
  comment: any;
}

const SingleComment: React.FC<Props> = ({ comment }) => {
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
          <div>
            <p className="detail_comment_user_content">{comment.content}</p>
          </div>
        </div>
      </div>
      <div className="detail_comment_fix">
        <span>수정</span>
        <span>삭제</span>
      </div>
    </div>
  );
};

export default SingleComment;
