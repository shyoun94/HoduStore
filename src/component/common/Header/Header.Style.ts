import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
export const HeaderSection = styled.header`
  width: 100vw;
  height: 5.625rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  box-shadow: 0px 4px 5px 0px #0000001a;
  & section {
    max-width: 80rem;
    width: 90%;
    height: 100%;
    margin: auto auto 0;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
      flex-direction: column;
      gap: 5px;
      margin: 10px auto;
      padding-bottom: 10px;
    }
  }
`;
export const HeaderCenterSection = styled.header`
  width: 100vw;
  height: 5.625rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 5px 0px #0000001a;
  & section {
    max-width: 87.75rem;
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
      gap: 10px;
      margin: 10px auto;
      padding-bottom: 10px;
    }
  }
`;

export const Logo = styled(Link)`
  max-width: 7.75rem;
  height: 2.375rem;
  margin-right: 1.875rem;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & h2 {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const FormDiv = styled.div`
  max-width: 25rem;
  width: 100%;
  min-height: 100%;
  padding: 0.625rem;
  place-items: center;
`;
export const HeaderInput = styled.input`
  transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: rgb(235, 235, 235);
  &:hover {
    color: white;
    background: rgb(200, 200, 200);
    box-shadow: 0px;
  }
  &:focus,
  &:not(:placeholder-shown) {
    transition: width cubic-bezier(1, 0.66, 0.39), border-radius, background;
    border: none;
    outline: none;
    box-shadow: none;
    padding-left: 15px;
    cursor: text;
    width: 300px;
    border-radius: auto;
    background: rgb(235, 235, 235);
    color: black;
  }
  & + label {
    position: relative;
    left: -35px;
    top: 5px;
    color: white;
    cursor: pointer;
  }
  & + label img {
    width: 28px;
    height: 28px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 38px;
`;
export const HeaderNav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 26px;
  /* position: relative; */
`;
export const CartBtn = styled(IconButton)`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  & img {
    display: block;
    margin: 0 auto;
    width: 32px;
    height: 32px;
  }
  & span {
    font-size: 0.8rem;
  }
`;
export const UserBtn = styled(IconButton)`
  margin-top: auto;
  display: flex;
  flex-direction: column;

  & img {
    display: block;
    margin: 0 auto;
    width: 32px;
    height: 32px;
  }
  & span {
    font-size: 0.8rem;
  }
`;

export const UserBtnWrapper = styled.div`
  position: relative;
  width: 4.5rem;
  height: 4rem;
`;

export const MypageMenu = styled.article`
  position: absolute;
  background-color: #fff;
  width: 8.125rem;
  height: 6.875rem;
  box-shadow: 0px 0px 6px 0px #00000040;
  right: -30px;
  bottom: -120px;
  border-radius: 10px;
  padding: 10px;
  & ul {
    padding-top: 2px;
    height: 100%;
    & li:hover {
      border: 1px solid #000;
      border-radius: 10px;
    }
  }
  & ul li {
    & button {
      font-size: 1.1rem;
      color: #767676;
      padding: 10px;
    }
    & button:hover {
      color: black;
    }
    text-align: center;
  }
  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #000;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
  } */
  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
    filter: drop-shadow(
      0px 0px 0.375rem rgba(0, 0, 0, 0.25)
    ); /* 그림자 효과 적용 */
  }
`;
