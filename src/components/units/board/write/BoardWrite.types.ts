import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

//BoardWrite
export interface IBoardWrite {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

//BoardWriteUI
export interface IBoardWriteUI {
  isEdit: boolean;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
  errName: string;
  errTitle: string;
  errPassword: string;
  errContent: string;
  isActive: boolean;
  goBoards: (e: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
}

//BoardWrite.style.ts
export interface ISubmitBtn {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}
