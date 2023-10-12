import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { NextRouter } from "next/router";

export interface IBoardListUI {
  onCreateBtn: () => void;
  data?: Pick<IQuery, "fetchBoards">;
  router: NextRouter;
}
