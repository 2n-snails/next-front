import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
  background: ${(props) => props.color};
`;
