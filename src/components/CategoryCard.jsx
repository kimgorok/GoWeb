import styled from "styled-components";
import { ThemeContext } from "../ThemeContext";

const Card = styled.div`
  display: flex;
  width: 25%;
  margin: auto;
  padding: 24px 30px 39px 30px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
  background: ${(props) => props.theme.CardColor};
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 10px 12px 6px ${(props) => props.theme.boxShadowColor};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* 이동 및 그림자 애니메이션을 부드럽게 만들기 위한 transition 속성 추가 */
  color: ${(props) => props.theme.TextColor};
  &:hover {
    transform: translate(10px, 16px); /* 마우스를 올렸을 때 x축으로 10px 이동 */
    box-shadow: 0px 12px 6px rgba(0, 0, 0, 0);
  }
`;

function CategoryCard(props) {
  const { children, onClick } = props;

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Card onClick={onClick} theme={context}>
          {children}
        </Card>
      )}
    </ThemeContext.Consumer>
  );
}

export default CategoryCard;
