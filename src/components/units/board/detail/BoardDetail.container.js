import Image from "next/image";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUi from "@/src/components/units/board/detail/BoardDetail.presenter";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardDetail() {
  const router = useRouter();
  console.log(router);
  //라우터를 찍어보는 게 중요하다.
  //여기서는 router의 주소가 query의 number에 들어있었다.

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
      //라우터에 찍힌 query 넘버를 boardId 에 넣어준다.
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const goBoards = () => {
    router.push(`/boards`);
  };

  const onDelete = () => {
    router.push(`/boards`);
    deleteBoard({
      variables: {
        boardId: router.query.number,
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  const goEdit = () => {
    router.push(`/boards/${router.query.number}/edit`);
  };

  console.log(data);
  return (
    <div>
      <BoardDetailUi
        Image={Image}
        data={data}
        goBoards={goBoards}
        onDelete={onDelete}
        goEdit={goEdit}
      />
    </div>
  );
}
