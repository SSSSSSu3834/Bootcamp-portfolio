import styled from "@emotion/styled";

export default function Nav() {
  return (
    <Container>
      <NavWrapper>
        <Text>자유게시판</Text>
        <Text>중고마켓</Text>
        <Text>마이페이지</Text>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #ffd600;
  height: 64px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 16px;
  margin-right: 70px;
  margin-left: 70px;
  cursor: pointer;
  padding: 20px;
  font-weight: 500;
`;
