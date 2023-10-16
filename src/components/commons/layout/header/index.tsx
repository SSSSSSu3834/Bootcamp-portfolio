import styled from "@emotion/styled";

export default function Header() {
  return (
    <div>
      <Wrapper>
        <Box>
          <span>로고</span>
          <span>로그인</span>
        </Box>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 120px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
