import BoardWrite from "@/src/components/units/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
//import { FETCH_BOARD } from "@/src/components/units/board/detail/BoardDetail.queries";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const Edit = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
};

export default Edit;
