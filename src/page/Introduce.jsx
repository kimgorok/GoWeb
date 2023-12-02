import styled from "styled-components";

const IntroWrapper = styled.div`
  min-height: 100vh;
  width: 75%;
  margin: auto;
  padding: 5%;
  background: #f0f0f0;
`;

const IntroText = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

function Introduce() {
  return (
    <IntroWrapper>
      <IntroText>안녕하세요 컴퓨터공학과 19학번 김현중입니다.</IntroText>
      <IntroText>
        이번 프로젝트의 컨셉은 요리의 카테고리별 요리의 리스트와 레시피를
        소개하는 사이트입니다.
      </IntroText>
      <IntroText>
        페이지는 MainPage, MyCategory, Recipe, Introduce로 구성되어 있습니다.
      </IntroText>
      <IntroText>
        1. 메인 페이지 : 요리 카테고리들이 카드의 형태로 나옵니다. <br />
        2. 카테고리 페이지 : 각 카테고리별 요리가 5개씩 나옵니다. <br />
        3. 레시피 페이지 : 선택한 요리의 레시피가 나옵니다. 댓글을 달 수
        있습니다. <br />
        4. 자기소개 페이지 : 지금 보고 계신 자기소개 페이지입니다.
      </IntroText>
      <IntroText>
        컴포넌트는 CategoryCard, FloatButton, Footer, Header가 있습니다.
      </IntroText>
      <IntroText>
        1. 카테고리 카드 : 카테고리가 카드 형태로 존재하게 한 컴포넌트
        <br />
        2. 요리 리스트 : 요리가 리스트의 형태로 존재하게 한 컴포넌트
        <br />
        3. FloatButton : 화면 우하단에 고정되어 다크모드, 상단이동, 하단이동
        버튼이 존재하는 버튼입니다. <br />
        4. Footer : 모든 페이지 하단에 고정된 푸터입니다.
        <br />
        5. Header : 모든 페이지 상단에 고정된 헤더입니다.
      </IntroText>
      <IntroText>
        styled-components를 사용하여 스타일을 적용하였습니다.
        <br />
        react-router-dom을 사용하여 페이지간 이동을 처리하였습니다.
        <br />
        context를 사용하여 전역적으로 스타일을 적용하게 하였습니다.
      </IntroText>
      <IntroText>
        useState훅을 사용하여 각종 상태를 관리하였고,
        <br />
        useEffect훅을 사용하여 API를 호출하였습니다.
        <br />
        사용자가 요리에 하트를 누른 여부와, 사용자가 남긴 댓글을 localStorage에
        저장하여 페이지를 이동해도 기록이 남아있게 하였습니다.
      </IntroText>
      <IntroText>
        이미지는 public폴더에 직접 저장하여 불러오기, <br />
        이미지 주소를 직접 가져오기, <br />
        그리고 API를 통해 이미지를 불러오는 3가지 방법을 사용하여 처리했습니다.
      </IntroText>
      <IntroText>모든 애니메이션은 CSS로 구현하였습니다.</IntroText>
    </IntroWrapper>
  );
}

export default Introduce;
