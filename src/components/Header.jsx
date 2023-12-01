import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  border-bottom: 2px solid #ffbc0d;
  display: flex;
  justify-content: space-between;
`;

const HeaderSVG = styled.svg`
  cursor: pointer;
  color: #ffbc0d;
`;

const HeaderText = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding: 20px;
  cursor: pointer;

  color: #ffbc0d;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderSVG
        onClick={() => {
          navigate("/");
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      </HeaderSVG>
      <HeaderText
        onClick={() => {
          navigate("/introduce");
        }}
      >
        소개
      </HeaderText>
    </Wrapper>
  );
}

export default Header;
