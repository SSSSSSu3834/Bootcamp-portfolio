import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDCOMMENT } from "./BoardCommentList.queries";
import styled from "@emotion/styled";

const BoardCommentList = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDCOMMENT, {
    variables: {
      boardId: router.query.number,
    },
  });

  return (
    <div>
      <Container>
        <Wrapper>
          <div>리스트</div>
          {console.log(data)}
          {data?.fetchBoardComments?.map((el: any) => (
            <CommnetWrapper>
              <div>{el.writer}</div>
              <div>{el.contents}</div>
            </CommnetWrapper>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default BoardCommentList;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0;
`;

export const CommnetWrapper = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin-top: 20px;
  width: 1199px;
  height: 114px;
`;
