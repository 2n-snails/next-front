import React from "react";
import styled, { css } from "styled-components";

// 일반 selectbox
const normalSelectStyle = css`

    select{
        background-color: #fff;
        border-radius : 4px;
        box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
        padding: 0.3rem;
        border: none;
        color : rgb(73, 80, 87);
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
