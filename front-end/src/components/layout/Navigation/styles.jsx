import styled from "styled-components";

export const NavigationSection = styled.section`
  width: 100%;
  height: 90px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ navBackground }) =>
    navBackground ? "#fff" : "transparent"};
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #000;
    padding: px 10px;
  }
  a:hover {
    color: #86745b;
  }
`;
export const NavigationLogo = styled.div`
  padding-left: 30px;
  img {
    max-width: 80px;
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      display: flex;
      height: 40px;
      min-width: 71px;
      padding: 0 18px;
      align-items: center;
    }
  }
`;
export const NavigationLogin = styled.div`
  padding-right: 30px;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    li {
      display: flex;
      padding: 0 10px;
      &:nth-child(2) {
        a {
          background-color: #eee4;
          border-radius: 15px;
        }
        a:hover {
          color: #999;
        }
      }
    }
  }
`;
