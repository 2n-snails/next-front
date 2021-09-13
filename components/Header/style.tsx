import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 184px;
  background-color: white;
`;

export const HeaderItems = styled.div`
  width: 1200px;
  height: 124px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .search-icon {
    position: relative;
    input {
      width: 415px;
      height: 40px;
      border: 1px solid #d9dcdd;
      box-sizing: border-box;
      border-radius: 3px;
    }

    svg {
      position: absolute;
      top: 14px;
      right: 10px;
    }
  }
`;

export const HeaderInfo = styled.div`
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;

  button {
    background-color: #ffff;
    width: 60px;
    height: 48px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

export const HeaderNavigator = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #70a1ff;

  display: flex;
  justify-content: center;
  align-items: center;

  .header-nav-wrapper {
    ul {
      display: flex;
      li {
        padding: 10px;
        a {
          color: #ffff !important;
        }
      }
    }
  }
`;
