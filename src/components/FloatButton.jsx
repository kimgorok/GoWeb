// ScrollToTop.js
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext";

const PlusButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  color: black;
  border: 3px solid #ffd700;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  z-index: 5;
  background: white;

  &:hover {
    background: #ececec;
  }
  transition: transform 0.1s ease-in-out;
  transform: rotate(${(props) => (props.isClicked ? "45deg" : "0")});
`;

const ScrollToTopButton = styled(PlusButton)`
  z-index: 4;
  transition: transform 0.1s ease-in-out;
  transform: translateY(${(props) => (props.isClicked ? "-270px" : "0")});
`;

const ScrollToBottomButton = styled(PlusButton)`
  z-index: 3;
  transition: transform 0.1s ease-in-out;
  transform: translateY(${(props) => (props.isClicked ? "-180px" : "0")});
`;

const DarkModeButton = styled(PlusButton)`
  z-index: 2;
  transition: transform 0.1s ease-in-out;
  transform: translateY(${(props) => (props.isClicked ? "-90px" : "0")});
`;

function ScrollToTop() {
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 상태로 관리
  const { theme, toggleTheme } = useContext(ThemeContext);

  const PlusClicked = () => {
    setIsClicked(!isClicked); // 클릭 시 상태를 토글
  };

  // 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 최하단으로 스크롤하는 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <PlusButton onClick={PlusClicked} isClicked={isClicked}>
        <svg
          stroke="currentColor"
          strokeWidth="4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" d="M12 4v16m8-8H4"></path>
        </svg>
      </PlusButton>
      <DarkModeButton onClick={toggleTheme} isClicked={isClicked}>
        {theme === "light" ? (
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"></path>
          </svg>
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
          </svg>
        )}
      </DarkModeButton>
      <ScrollToTopButton onClick={scrollToTop} isClicked={isClicked}>
        ⬆
      </ScrollToTopButton>
      <ScrollToBottomButton onClick={scrollToBottom} isClicked={isClicked}>
        ⬇
      </ScrollToBottomButton>
    </>
  );
}

export default ScrollToTop;
