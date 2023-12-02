import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";

const GoBackButton = styled.button`
  position: absolute;
  padding: 10px;
  left: 5%;
  margin-top: 0.1%;
  background: none;
  border-radius: 50%;
  border: none;
  color: #ffbc0d;
  font-size: 2.5rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

const Loading = styled.div`
  margin: auto;
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  padding-top: 5%;
  height: 80vh;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  color: #292929;
  margin-top: 40px;
`;

const RecipeDesc = styled(RecipeTitle)`
  font-size: 1.6rem;
  margin-top: 15px;
  color: #808080;
`;

const FoodImg = styled.img`
  width: 500px;
  height: 500px;
  margin: 40px;
  border-radius: 10%;
`;

const MyRecipe = styled.div`
  width: 66%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #8080a1;
`;

const MoreButton = styled.button`
  padding: 5px 35px 5px 35px;
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 700;
`;

const Comment = styled.h2`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const CommentUL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const CommentList = styled.li`
  font-size: 1.5rem;
  border-bottom: 2px solid #292929;
  padding: 10px 0px 10px 0px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const CommentDelete = styled(MoreButton)`
  margin-left: 100px;
  border: 4px solid #ffbc0d;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: lightgoldenrodyellow;
    scale: 1.1;
  }
`;

const CommentWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const CommentInputAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const CommentInput = styled.textarea`
  width: 100%;
  margin: auto;
  height: 80px;
  border: 2px solid #8080a1;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.3rem;
`;

const SubmitButton = styled(CommentDelete)`
  margin: 10px 0px 60px 0px;
`;

function Recipe() {
  const { categoryId, recipeId } = useParams();
  const navigate = useNavigate();
  // 카테고리와 레시피 정보를 가져오기
  // 배열 data에서 id가 categoryId와 일치하는 항목을 가져옴
  const category = data.find((item) => item.id == categoryId);
  // recipeId에서 일의자리만 추출해서 저장
  const lastDigitOfRecipeId = (recipeId % 10) - 1;
  // 레시피 데이터, 로딩 상태, 댓글 정보 관리
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // 댓글 정보를 로컬 스토리지에 저장하기 위한 키
  const storageKey = `comments_${categoryId}_${recipeId}`;

  // 레시피 데이터를 비동기적으로 가져오기
  useEffect(() => {
    // 비 동기적으로 레시피 데이터 가져옴
    const fetchData = async () => {
      try {
        // 현재 선택된 레시피의 이름을 가져와 API에 전달합니다.
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${
            category.detail.find((item) => item.id == recipeId).recipe
          }`
        );
        // API 응답을 JSON으로 파싱한 후, 해당 레시피의 첫 번째 항목을 setRecipe를 통해 상태로 설정
        const data = await response.json();
        setRecipe(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category.detail, recipeId]);

  const goBack = () => {
    navigate(-1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // 댓글 추가 함수
  const addComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(storageKey, JSON.stringify(updatedComments));
      setNewComment("");
    }
  };

  // 댓글 삭제 함수
  const deleteComment = (index) => {
    const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
    if (confirmDelete) {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
      localStorage.setItem(storageKey, JSON.stringify(updatedComments));
    }
  };

  // 로컬 스토리지에서 댓글 정보 가져오기
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(storageKey)) || [];
    setComments(storedComments);
  }, [storageKey]);

  // 상세 내용 더 보기 기능
  const [displayedLength, setDisplayedLength] = useState(600);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setDisplayedLength(displayedLength + 1000000);
    if (displayedLength + 400 >= recipe?.strInstructions.length) {
      setShowMore(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading>로딩중...</Loading>
      ) : (
        <>
          <GoBackButton onClick={goBack}>◀</GoBackButton>
          <Wrapper>
            <RecipeTitle>
              {category.detail[lastDigitOfRecipeId].detail_title}
            </RecipeTitle>
            <RecipeDesc>
              {category.detail[lastDigitOfRecipeId].detail_desc}
            </RecipeDesc>
            <FoodImg src={recipe?.strMealThumb} alt="" />
            <MyRecipe>
              {recipe?.strInstructions.slice(0, displayedLength)}
            </MyRecipe>
            {recipe?.strInstructions.length > displayedLength && showMore && (
              <MoreButton onClick={handleShowMore}>더 보기 ⬇</MoreButton>
            )}

            <CommentWrapper>
              <Comment>댓글</Comment>
              <CommentUL>
                {comments.map((comment, index) => (
                  <CommentList key={index}>
                    {comment}
                    <CommentDelete onClick={() => deleteComment(index)}>
                      삭제
                    </CommentDelete>
                  </CommentList>
                ))}
              </CommentUL>
              <CommentInputAndButton>
                <CommentInput
                  type="text"
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="댓글을 입력하세요"
                />
                <SubmitButton onClick={addComment}>댓글 추가</SubmitButton>
              </CommentInputAndButton>
            </CommentWrapper>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default Recipe;
