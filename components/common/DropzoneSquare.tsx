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

const Dropzone: React.FC<any> = ({ onFilesAddedProps, disabled }: any) => {
  const fileInputRef = useRef(null);
  const [hightlight, setHightlight] = useState(false);
  //   constructor(props) {
  //     super(props);

  //     this.openFileDialog = this.openFileDialog.bind(this);
  //     this.onFilesAdded = this.onFilesAdded.bind(this);
  //     this.onDragOver = this.onDragOver.bind(this);
  //     this.onDragLeave = this.onDragLeave.bind(this);
  //     this.onDrop = this.onDrop.bind(this);
  //   }

  // done
  const openFileDialog = () => {
    if (disabled) {
      return;
    }
    fileInputRef.current.click();
  };

  // done
  const onFilesAdded = (evt) => {
    if (disabled) {
      return;
    }
    const { files } = evt.target;
    if (onFilesAddedProps) {
      const array = fileListToArray(files);
      onFilesAddedProps(array);
    }
  };

  // done
  const onDragOver = (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    setHightlight(true);
  };

  // done
  const onDragLeave = (event) => {
    setHightlight(false);
  };

  // done
  const onDrop = (event) => {
    event.preventDefault();
    if (disabled) {
      return;
    }
    const { files } = event.dataTransfer;
    if (onFilesAddedProps) {
      const array = fileListToArray(files);
      onFilesAddedProps(array);
    }
    setHightlight(false);
  };

  // done
  const fileListToArray = (list) => {
    const array = [];
    list.forEach((element) => {
      array.push(list.item(element));
    });
    // for (let i = 0; i < list.length; i++) {
    //   array.push(list.item(i));
    // }
    return array;
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
