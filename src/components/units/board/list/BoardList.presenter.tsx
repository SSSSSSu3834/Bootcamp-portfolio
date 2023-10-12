import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./BoardList.styles";
import { IBoardListUI } from "./BoardList.types";
import { MouseEvent } from "react";

export default function BoardListUI(props: IBoardListUI) {
  return (
    <div>
      <S.Wrapper>
        <S.TopBar>
          <span>번호</span>
          <span>제목</span>
          <span>글쓴이</span>
          <span>날짜</span>
        </S.TopBar>
        {props.data?.fetchBoards?.map((el) => (
          <S.List key={el._id}>
            <span>{el._id.slice(0, 5)}</span>
            <S.TitleCLick
              id={el._id}
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                props.router.push(`/boards/${el._id}`);
              }}
            >
              {el.title}
            </S.TitleCLick>
            <span>{el.writer}</span> <span>{el.createdAt.slice(0, 10)}</span>
          </S.List>
        ))}
        <S.Line />
        <S.BtnWrapper>
          <S.NewBtn onClick={props.onCreateBtn}>게시물 등록하기</S.NewBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </div>
  );
}
