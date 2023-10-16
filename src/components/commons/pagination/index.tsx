import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import { Fragment, MouseEvent } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { FETCH_BOARDS_COUNT } from "../../units/board/list/BoardList.queries";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//       createdAt
//     }
//   }
// `;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  // const { data, refetch } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS);
  // console.log(data?.fetchBoards);
  // // data.fetchBoards가 배열인 상태

  // 목록의 전체개수
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // 마지막 페이지 구하기
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (e) => {
    // refetch 함수 안에는 variables를 써줘야한다. 하지만 variables를 써줄 필요는 없음
    props.refetch({
      page: Number(e.currentTarget.id),
    });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      <Wrapper>
        <PageBtn onClick={onClickPrevPage}>{`<`}</PageBtn>

        {new Array(10).fill(1).map((_, index) =>
          index + startPage <= lastPage ? (
            <PageNum key={index + startPage}>
              <span id={String(index + startPage)} onClick={onClickPage}>
                {index + startPage}
              </span>
            </PageNum>
          ) : (
            <span></span>
          )
        )}
        <PageBtn onClick={onClickNextPage}>{`>`}</PageBtn>
      </Wrapper>
    </div>
  );
}

export const PageNum = styled.span`
  padding: 10px 10px 10px 10px;
  cursor: pointer;
`;

export const PageBtn = styled.span`
  padding: 10px 10px 10px 10px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  margin-top: 20px;
`;
