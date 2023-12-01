import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

// 카테고리들을 담을 Wrapper
export const Wrapper = styled.div`
  margin: auto; // 가운데 정렬 위해
  width: 75%;
  height: auto;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 41px;
  flex-wrap: wrap;
  padding: 30px 0px 140px 0px;
`;

// 전체 카테고리 글씨
const CategoryText = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size: 2rem;
  width: 70%;
  margin: auto;
  color: #808080;
`;

const CategoryImg = styled.img`
  width: 100%;
  height: 211px;
`;

const CategoryTitleKor = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

const CategoryTitleEng = styled(CategoryTitleKor)`
  font-size: 1.5rem;
`;

function MainPage() {
  // 페이지 이동을 위한 navigate
  const navigate = useNavigate();
  return (
    <>
      <CategoryText>전체 카테고리</CategoryText>
      <Wrapper>
        {data.map((li) => {
          return (
            <CategoryCard
              key={li.id}
              title={li.title}
              onClick={() => {
                navigate(`/category/${li.id}`);
              }}
            >
              <CategoryImg src={li.src} alt=""></CategoryImg>
              <CategoryTitleKor>{li.title}</CategoryTitleKor>
              <CategoryTitleEng>{li.eng_title}</CategoryTitleEng>
            </CategoryCard>
          );
        })}
      </Wrapper>
    </>
  );
}

export default MainPage;
