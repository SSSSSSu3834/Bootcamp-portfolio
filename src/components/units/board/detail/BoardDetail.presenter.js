import * as S from "./BoardDetail.styles";

export default function BoardDetailUi(props) {
  return (
    <div>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <props.Image
              src="/profile.svg"
              alt="프로필 이미지"
              width={56}
              height={56}
            />
            <div>
              <S.Name>{props.data?.fetchBoard?.writer}</S.Name>
              <S.Date>{props.data?.fetchBoard?.createdAt.slice(0, 10)}</S.Date>
            </div>
          </S.Header>
          <S.Line />
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Content>{props.data?.fetchBoard?.contents}</S.Content>
        </S.Wrapper>

        <S.BtnWrapper>
          <S.Btn onClick={props.goBoards}>목록으로</S.Btn>
          <S.Btn onClick={props.goEdit}>수정하기</S.Btn>
          <S.Btn onClick={props.onDelete}>삭제하기</S.Btn>
        </S.BtnWrapper>
      </S.Container>
    </div>
  );
}
