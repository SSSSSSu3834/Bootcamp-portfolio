import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";
import { useRouter } from "next/router";
import { FETCH_BOARDCOMMENT } from "../list/BoardCommentList.queries";
import { CREATE_BOARDCOMMENT } from "./BoardCommenetWrite.queries";

const BoardCommentWrite = () => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState();

  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT);

  const onChangeName = (e) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeContenet = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await createBoardComment({
      variables: {
        boardId: router.query.number,
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: 2, //별점 임시설정
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARDCOMMENT,
          variables: { boardId: router.query.boardId },
        },
      ],
    });

    console.log(result);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <HeadWrapper>
            <Image
              src="/comment.svg"
              alt="댓글 이미지"
              width={24}
              height={24}
            />
            <Title>댓글</Title>
          </HeadWrapper>
          <CommentWrapper>
            <Writer placeholder="작성자" onChange={onChangeName} />
            <Writer placeholder="비밀번호" onChange={onChangePassword} />
          </CommentWrapper>
          <CommentText
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={onChangeContenet}
          />
          <CommentTextFooterWrapper>
            <span>0/100</span>
            <SubBut onClick={handleSubmit}>등록하기</SubBut>
          </CommentTextFooterWrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default BoardCommentWrite;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0;
`;

const Writer = styled.input`
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px 14px 20px;
  box-sizing: border-box;
  margin-right: 24px;
  border-color: #bdbdbd;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const CommentText = styled.textarea`
  width: 1200px;
  height: 108px;
  resize: none;
  padding: 20px 20px 20px 20px;
  border-color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const Title = styled.p`
  margin-bottom: 5px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const CommentTextFooterWrapper = styled.div`
  width: 1200px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  margin-bottom: 31px;
`;

const SubBut = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 14px, 16px, 14px, 16px;
  width: 91px;
  height: 52px;
  margin: 0px;
  cursor: pointer;
`;
