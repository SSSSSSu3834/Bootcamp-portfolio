import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUi from "@/src/components/units/board/detail/BoardDetail.presenter";

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

  console.log(data);
  return (
    <div>
      <BoardDetailUi Image={Image} data={data} />
    </div>
  );
}
