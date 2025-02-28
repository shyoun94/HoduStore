import React, { useState, useEffect } from "react";
import {
  HeaderSection,
  Logo,
  LogoImage,
  HeaderForm,
  HeaderCenterSection,
} from "./Header.Style";
import { TextField } from "@mui/material";
import HoduLogo from "../../../assets/images/Logo-hodu.png";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../../redux/Search";
import { useLocation } from "react-router-dom";
import Search from "../../../assets/images/search.svg";
import { SearchAPI } from "../../../API/ProductAPI";

interface HeaderProps {
  type?:
    | "home"
    | "seller"
    | "buyer"
    | "seller_center"
    | "cart_mypage"
    | "detail";
}

const MobileHeader: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const storedData = localStorage.getItem("UserInfo");
  const userInfo = storedData ? JSON.parse(storedData) : null;
  const userType = userInfo ? userInfo.user_type : null;
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("home");

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const search = async (
    e: React.KeyboardEvent,
    value: string,
    page: number = 1,
    accumulatedResults: any[] = []
  ) => {
    if (e.key === "Enter") {
      try {
        const res = await SearchAPI(inputValue, page);
        accumulatedResults.push(...res.data.results);

        if (res.data.next) {
          await search(e, value, page + 1, accumulatedResults);
        } else {
          dispatch(setSearchData({ value: accumulatedResults }));
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  };
  const onClickHome = () => {
    setInputValue("");
    dispatch(setSearchData({ value: [] }));
  };
  const handleIconClick = () => {
    if (inputValue)
      search({ key: "Enter" } as React.KeyboardEvent, inputValue, 1, []);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(e, inputValue, 1, []);
    }
  };

  useEffect(() => {
    if (userType) {
      if (pathname.startsWith("/detailProduct")) {
        setType("detail");
      } else if (pathname.startsWith("/orderpage")) {
        setType("detail");
      } else if (pathname === "/cart" || pathname === "/mypage") {
        setType("cart_mypage");
      } else if (userType === "BUYER") {
        setType("buyer");
      } else {
        setType("seller");
        if (
          pathname === "/seller/center" ||
          pathname === "/seller/center/upload"
        ) {
          setType("seller_center");
        }
      }
    } else {
      setType("home");
      if (pathname === "/cart" || pathname === "/mypage") {
        setType("cart_mypage");
      } else if (pathname.startsWith("/detailProduct")) {
        setType("detail");
      } else if (pathname.startsWith("/orderpage")) {
        setType("detail");
      }
    }
  }, [pathname, type, userType]);
  const UI: { [key: string]: JSX.Element } = {
    home: (
      <>
        <Logo to="/">
          <LogoImage
            src={HoduLogo}
            alt="호두마켓 로고"
            onClick={() => onClickHome()}
          />
        </Logo>
        <Form onSubmit={(e) => e.preventDefault()} id="search-form">
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={handleKeyDown}
            fullWidth
            size="small"
            style={{ fontSize: "16px" }}
            aria-label="상품검색"
          />
          <SearchBtn onClick={() => handleIconClick()} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </>
    ),
    seller: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <Form onSubmit={(e) => e.preventDefault()} id="search-form">
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={handleKeyDown}
            fullWidth
            size="small"
            style={{ fontSize: "16px" }}
            aria-label="상품검색"
          />
          <SearchBtn onClick={() => handleIconClick()} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </>
    ),
    buyer: (
      <>
        <Logo to="/" onClick={() => onClickHome()}>
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>

        <Form onSubmit={(e) => e.preventDefault()} id="search-form">
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="키워드를 검색하세요"
            value={inputValue}
            onInput={handleData}
            onKeyDown={handleKeyDown}
            fullWidth
            size="small"
            style={{ fontSize: "20px" }}
            aria-label="상품검색"
          />
          <SearchBtn onClick={() => handleIconClick()} type="submit">
            <img src={Search} alt="검색창 아이콘" />
          </SearchBtn>
        </Form>
      </>
    ),
    seller_center: (
      <>
        <Logo to="/">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          <h2>판매자센터</h2>
        </HeaderForm>
      </>
    ),
    cart_mypage: (
      <>
        <Logo to="/">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <HeaderForm>
          {pathname.startsWith("/cart") ? (
            <h2>장바구니</h2>
          ) : (
            <h2>마이페이지</h2>
          )}
        </HeaderForm>
      </>
    ),
    detail: (
      <>
        <Logo to="/">
          <LogoImage src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
      </>
    ),
  };
  return (
    <>
      {type === "seller_center" ||
      type === "cart_mypage" ||
      type === "detail" ||
      type === "detail" ? (
        <HeaderCenterSection>
          <section>{UI[type]}</section>
        </HeaderCenterSection>
      ) : (
        <HeaderSection>
          <section>{UI[type]}</section>
        </HeaderSection>
      )}
    </>
  );
};
export default MobileHeader;

const SearchBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  & img {
    width: 28px;
    height: 28px;
  }
`;

const Form = styled.form`
  width: 100%;
  position: relative;
`;
