import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUi {
  data: Pick<IQuery, "fetchBoard">;
  goBoards: () => void;
  onDelete: () => void;
  goEdit: () => void;
}
