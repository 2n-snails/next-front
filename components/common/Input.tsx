import { InputGroup } from "@/styles/common/Input";
import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
}

const InputComponent: React.FC<IProps> = ({ icon, ...props }) => {
  console.log("console.log,", { ...props });
  return (
    <InputGroup iconExist={!!icon}>
      <input placeholder="비밀번호" {...props} />
      <div className="input-icon-wrapper">{icon}</div>
    </InputGroup>
  );
};

export default React.memo(InputComponent);
