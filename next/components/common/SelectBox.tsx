import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

// 일반 selectbox
const normalSelectStyle = css`
    width: 100%;
    height: 46px;

    select{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
`;

interface SelectContainerProps {
    type: "normal" | "register";
}

const SelectBoxContainer = styled.div<SelectContainerProps>`
${({ type }) => type === "normal" && normalSelectStyle};

`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    type?: "normal" | "register";
    options?: string[];
    errorMessage?: string;

}

export const SelectBox: React.FC<IProps> = ({
  type = "normal",
  options = [],
  errorMessage = "옵션을 선택하세요.",
  ...props }) => {
  return (
    <SelectBoxContainer
      type={type}
    >
      <label>
        <select {...props}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </SelectBoxContainer>
  );
};

export default React.memo(SelectBox);
