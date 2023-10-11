import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <S.Container>
        <S.Wrapper>
          <h2>게시물 {props.isEdit ? "수정" : "등록"}</h2>
          <S.DefaultValue>
            <S.LeftItem>
              <S.Title>작성자</S.Title>
              <S.InputBox
                placeholder="이름을 입력해주세요."
                onChange={props.onChangeName}
                readOnly={props.data?.fetchBoard.writer}
                defaultValue={props.data?.fetchBoard.writer}
              />
              <S.ErrMessage>{props.errName}</S.ErrMessage>
            </S.LeftItem>
            <div>
              <S.Title>비밀번호</S.Title>
              <S.InputBox
                placeholder="비밀번호를 입력해주세요."
                type="password"
                onChange={props.onChangePassword}
              />
              <S.ErrMessage>{props.errPassword}</S.ErrMessage>
            </div>
          </S.DefaultValue>
          <S.Item>
            <S.Title>제목</S.Title>
            <S.TitleInput
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeTitle}
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.ErrMessage>{props.errTitle}</S.ErrMessage>
          </S.Item>
          <S.Item>
            <S.Title>내용</S.Title>
            <S.TextareaBox
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContent}
              defaultValue={props.data?.fetchBoard.contents}
            />
            <S.ErrMessage>{props.errContent}</S.ErrMessage>
          </S.Item>
          <S.PostItem>
            <S.Title>주소</S.Title>
            <S.PostInput placeholder="00000" />
            <S.PostBtn>우편번호 검색</S.PostBtn>
            <S.PostInput2 />
            <S.PostInput2 />
          </S.PostItem>

          <S.Item>
            <S.Title>유튜브</S.Title>
            <S.TitleInput placeholder="링크를 복사해주세요." />
          </S.Item>

          <S.Leftside>
            <S.Title>사진 첨부</S.Title>
            <S.PhothBocWrapper>
              <S.PhotoBox>
                <S.Upload>
                  <div>+</div>
                  <div>upload</div>
                </S.Upload>
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload>
                  <div>+</div>
                  <div>upload</div>
                </S.Upload>
              </S.PhotoBox>
              <S.PhotoBox>
                <S.Upload>
                  <div>+</div>
                  <div>upload</div>
                </S.Upload>
              </S.PhotoBox>
            </S.PhothBocWrapper>
          </S.Leftside>
          <S.Leftside>
            <S.Title>메인 설정</S.Title>
            <S.RadioWrapper>
              <S.CheckItem>
                <S.RadioBtn type="radio" />
                <S.RadinLabel>유튜브</S.RadinLabel>
              </S.CheckItem>
              <S.CheckItem>
                <S.RadioBtn type="radio" />
                <S.RadinLabel>사진</S.RadinLabel>
              </S.CheckItem>
            </S.RadioWrapper>
          </S.Leftside>

          {props.isEdit ? (
            <>
              <S.BtnWrapper>
                <S.CancleBtn onClick={props.goBoards}>취소하기</S.CancleBtn>
                <S.UpdateBtn onClick={props.handleUpdate}>수정하기</S.UpdateBtn>
              </S.BtnWrapper>
            </>
          ) : (
            <>
              <S.SubmitBtn
                onClick={props.handleSubmit}
                isActive={props.isActive}
              >
                등록하기
              </S.SubmitBtn>
            </>
          )}
        </S.Wrapper>
      </S.Container>
    </div>
  );
}
