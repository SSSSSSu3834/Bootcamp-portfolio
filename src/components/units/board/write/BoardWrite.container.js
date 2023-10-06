import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  //input창 State
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [address, setAddress] = useState("");
  const [youtub, setYoutub] = useState("");
  const [isActive, setIsActive] = useState(false);

  //에러 메시지
  const [errName, setErrName] = useState("");
  const [errTitle, setErrTitle] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errContent, setErrContent] = useState("");

  //onChange 함수 만들고 props 연결하기
  const onChangeName = (e) => {
    setName(e.target.value);
    setErrName("");
    if (e.target.value && password && title && content) {
      setIsActive(true);
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    if (name && e.target.value && title && content) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setErrTitle("");
    if (e.target.value && password && name && content) {
      setIsActive(true);
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    setErrContent("");
    if (e.target.value && password && title && name) {
      setIsActive(true);
    }
  };

  const handleSubmit = async (e) => {
    {
      name ? setErrName("") : setErrName("이름을 입력하세요");
    }
    {
      title ? setErrTitle("") : setErrTitle("제목을 입력하세요");
    }
    {
      password ? setErrPassword("") : setErrPassword("비밀번호를 입력하세요");
    }
    {
      content ? setErrContent("") : setErrContent("내용을 입력하세요");
    }
    if (name && password && title && content) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password, //key값이랑 value 값이 같으면 하나만 써줘도 된다.
            title, // 이걸 shorthand-property 라고 한다.
            contents: content,
          },
        },
      });
      console.log(result);
      router.push(`/boards/${result.data.createBoard._id}`);
      //작성한 result의 data의 메소드의 id 값을 푸쉬해줄 주소로 넣어준다
    }
  };

  return (
    <div>
      <BoardWriteUI
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        handleSubmit={handleSubmit}
        errName={errName}
        errTitle={errTitle}
        errPassword={errPassword}
        errContent={errContent}
        isActive={isActive}
      />
    </div>
  );
}
