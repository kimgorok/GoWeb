import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import FoodList from "../components/FoodList";

// 음식 목록을 감싸는 Wrapper
const FoodWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 75%;
  height: auto;
  gap: 35px;
  flex-direction: column;
  padding-bottom: 100px;
`;

function MyCategory() {
  // 페이지 이동을 위한 navigate
  const navigate = useNavigate();
  // url에서 categoryId값을 가져옴
  const { categoryId } = useParams();
  // 배열 data에서 id가 categoryId와 일치하는 항목을 가져옴
  const category = data.find((item) => item.id == categoryId);

  // 로컬 스토리지에서 초기 추천 상태 가져오기
  const initialRecommendations = JSON.parse(
    localStorage.getItem("recommendations") || "{}"
  );
  const [recommendations, setRecommendations] = useState(
    initialRecommendations
  );

  // 추천 버튼 토글
  const handleRecommend = (detailItemId) => {
    setRecommendations((prevRecommendations) => ({
      ...prevRecommendations,
      [detailItemId]: !prevRecommendations[detailItemId],
    }));
  };

  // 추천 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("recommendations", JSON.stringify(recommendations));
  }, [recommendations]);

  return (
    <FoodWrapper>
      <h1 style={{ fontWeight: "bold", color: "#808080" }}>{category.title}</h1>
      {category.detail.map((detailItem) => (
        <FoodList
          key={detailItem.id}
          detailItem={detailItem}
          categoryId={category.id}
          navigate={navigate}
          handleRecommend={handleRecommend}
          isRecommended={recommendations[detailItem.id]}
        />
      ))}
    </FoodWrapper>
  );
}

export default MyCategory;
