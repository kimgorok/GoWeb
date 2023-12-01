import styled from "styled-components";

const FooterWrapper = styled.div`
  background: #292929;
`;

const FooterFrame = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
`;

const MyName = styled.div`
  color: #929292;
  font-weight: 700;
  padding: 3%;
  font-size: 1.2rem;
  width: 100%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterFrame>
        <div style={{ display: "flex", width: "100%" }}>
          <MyName>학과: 컴퓨터공학과</MyName>
          <MyName>학번: 201935250</MyName>
          <MyName>이름: 김현중</MyName>
        </div>
        <div style={{ padding: "10px" }}>
          <MyName>E-mail: khj093099@gachon.ac.kr</MyName>
          <MyName>GitHub: https://github.com/kimgorok/GoWeb</MyName>
        </div>
      </FooterFrame>
    </FooterWrapper>
  );
}

export default Footer;
