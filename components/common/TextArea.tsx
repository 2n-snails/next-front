import React from "react";
import TextAreaComponent from "react-textarea-autosize";
import styled from "styled-components";

const TextAreaStyle = styled(TextAreaComponent)`
  resize: none;
  padding: 14px 14px;
  outline: none;
  border: 1px solid #d9dcdd;
  border-radius: 2px;
  width: 100%;
  color: #d9dcdd;
`;

interface Props {
  minRows?: number;
  maxRows?: number;
}
const TextArea: React.FC<Props> = ({ minRows, maxRows }) => {
  return (
    <TextAreaStyle
      minRows={minRows}
      maxRows={maxRows}
      defaultValue="내용을 입력해주세요."
    />
  );
};

export default TextArea;
