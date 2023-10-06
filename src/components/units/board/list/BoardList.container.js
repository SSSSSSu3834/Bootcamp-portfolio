import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const router = useRouter();

  const onCreateBtn = () => {
    router.push(`./boards/new`);
  };

  return (
    <div>
      <BoardListUI onCreateBtn={onCreateBtn} data={data} router={router} />
    </div>
  );
}
