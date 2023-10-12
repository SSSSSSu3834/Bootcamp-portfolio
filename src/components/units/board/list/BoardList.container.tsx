import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const router = useRouter();

  const onCreateBtn = () => {
    router.push(`./boards/new`);
  };

  // const goDetail = (e: MouseEvent<HTMLDivElement>) => {
  //   if (e.target instanceof HTMLDivElement)
  //     router.push(`/boards/${e.target.id}`);
  // };

  return (
    <div>
      <BoardListUI onCreateBtn={onCreateBtn} data={data} router={router} />
    </div>
  );
}
