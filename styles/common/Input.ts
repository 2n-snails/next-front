import styled from "styled-components";

export const InputGroup = styled.div<{ iconExist?: boolean }>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};

    border: 1px solid ${({ theme }) => theme.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${({ theme }) => theme.gray_76};
    }
  }

  .input-icon-wrapper {
    position: absolute;
    right: 11px;
    top: 0px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;
