import { fileListToArray } from "@/utils/filelist_to_array";
import React, { useRef, useState } from "react";
import styled from "styled-components";

export const DropzoneContainer = styled.div`
  .Dropzone {
    height: 200px;
    width: 200px;
    background-color: #fff;
    border: 2px solid rgb(187, 186, 186);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
  }

  .Highlight {
    background-color: rgb(188, 185, 236);
  }

  .Icon {
    opacity: 0.3;
    height: 64px;
    width: 64px;
  }

  .FileInput {
    display: none;
  }
`;
interface DropzoneProps {
  handleFileUpload: any;
  disabled: any;
}

const Dropzone: React.FC<DropzoneProps> = ({ handleFileUpload, disabled }) => {
  const fileInputRef = useRef(null);
  const [hightlight, setHightlight] = useState(false);

  // 파일업로드 공간을 클릭함.
  const openFileDialog = () => {
    if (disabled) {
      return;
    }
    fileInputRef.current.click();
  };

  // 파일이 추가 되었을 때
  const onFilesAdded = async (evt) => {
    console.log("파일이 추가됨");
    if (disabled) {
      return;
    }
    const { files } = evt.target;
    if (handleFileUpload) {
      const array = await fileListToArray(files);
      handleFileUpload(array);
    }
  };

  // 마우스가 파일업로드 공간 안에 있음.(하이라이팅 실행)
  const onDragOver = (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    setHightlight(true);
  };

  // 마우스가 파일업로드 공간 밖에 있음.(하이라이팅 취소)
  const onDragLeave = () => {
    setHightlight(false);
  };

  // 파일 업로드 공간에 파일을 업로드함.
  const onDrop = async (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    const { files } = event.dataTransfer;
    if (handleFileUpload) {
      const array = await fileListToArray(files);
      handleFileUpload(array);
    }
    setHightlight(false);
  };

  return (
    <DropzoneContainer>
      <div
        className={`Dropzone ${hightlight ? "Highlight" : ""}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={openFileDialog}
        style={{ cursor: disabled ? "default" : "pointer" }}
      >
        <input
          ref={fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={onFilesAdded}
        />
        <img alt="upload" className="Icon" src="/static/svg/camera.svg" />
        <span>1/10</span>
      </div>
    </DropzoneContainer>
  );
};

export default Dropzone;
