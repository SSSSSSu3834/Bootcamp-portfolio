import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

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
      <BoardListUI
        onCreateBtn={onCreateBtn}
        data={data}
        router={router}
        refetch={refetch}
      />
    </div>
  );
}
