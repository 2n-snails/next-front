import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 184px;
  background-color: white;

  @media (max-width: 414px) {
    max-width: 100%;
    height: 220px;
  }
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

  @media (max-width: 414px) {
    width: 100%;
    height: 170px;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    /* & > ::nth-child(2) {
      display: inline;
    } */

    .search-icon {
      display: none;
      input {
        margin: 0;
        width: 80px;
        height: 40px;
      }
    }
    svg {
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

  @media (max-width: 414px) {
    svg {
    }
  }
`;

export const HeaderNavigator = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #70a1ff;

  .header-nav-wrapper {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-content: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        padding: 10px;
        a {
          color: #ffff !important;
        }
      }
    }
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 50px;

    .header-nav-wrapper {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
`;
