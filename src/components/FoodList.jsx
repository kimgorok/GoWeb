// /src/components/FoodList.jsx

import React from "react";
import styled from "styled-components";

const FoodFrame = styled.div`
  border: none;
  border-radius: 30px;
  width: 100%;
  padding: 2%;
  box-sizing: border-box;
  display: flex;
  background: #f8f8f8;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border: 2px solid #ffbc0d;
    background: white;
  }
`;

const FoodContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const FoodImg = styled.img`
  width: 140px;
  height: 150px;
`;

const FoodTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  gap: 20px;
`;

const FoodTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
`;

const Fooddesc = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
`;

const RecommendButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 50px;
  margin-left: 40px;
  background: none;
`;

function FoodList({
  detailItem,
  categoryId,
  navigate,
  handleRecommend,
  isRecommended,
}) {
  return (
    <FoodFrame
      onClick={() => {
        navigate(`/category/${categoryId}/${detailItem.id}`);
      }}
    >
      <FoodContentWrapper>
        <FoodImg src={detailItem.detail_src} alt="사진없음" />
        <FoodTextBox>
          <FoodTitle>{detailItem.detail_title}</FoodTitle>
          <Fooddesc>{detailItem.detail_desc}</Fooddesc>
        </FoodTextBox>
      </FoodContentWrapper>
      <RecommendButton
        onClick={(e) => {
          e.stopPropagation();
          handleRecommend(detailItem.id);
        }}
      >
        {!isRecommended ? (
          <svg
            width="44px"
            height="44px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        ) : (
          <svg
            width="44px"
            height="44px"
            fill="red"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
          </svg>
        )}
      </RecommendButton>
    </FoodFrame>
  );
}

export default FoodList;
