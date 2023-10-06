import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 103px 100px 103px;
  width: 1200px;
  margin: 0;
  box-shadow: 0px 0px 10px gray;
`;

export const DefaultValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 80px;
`;

export const Title = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;
export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;

  font-size: 16px;
`;

export const LeftItem = styled.div`
  margin-right: 24px;
`;
//LeftItem 에는 margin-right가 있어서 Item따로 제작
export const Item = styled.div`
  margin-bottom: 40px;
`;

export const InputBox = styled.input`
  width: 486px;
  height: 52px;
  font-size: 16px;
  font-weight: 400;
  padding-left: 16px;
`;

export const TextareaBox = styled.textarea`
  width: 996px;
  height: 480px;
  resize: none;
  padding-left: 16px;
  padding-top: 16px;
  font-size: 16px;
`;

// post
export const PostItem = styled.div`
  margin-top: 16px;
`;
export const PostBtn = styled.button`
  background-color: black;
  color: white;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
  cursor: pointer;
`;
export const PostInput = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  font-size: 16px;
`;
export const PostInput2 = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  margin-bottom: 30px;
  font-size: 16px;
`;

//사진 첨부
export const PhotoBox = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  cursor: pointer;
`;

export const PhothBocWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

//width 100%로 만들어서 내부의 PhothBocWrapper가 start위치에 놓이도록 함.
export const Leftside = styled.div`
  width: 1010px;
  margin-bottom: 40px;
`;

export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
`;

// 메인 설정
export const CheckItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioBtn = styled.input`
  margin-right: 8px;
  //브라우저에서 제공하는 기본 색상 변경
  accent-color: red;
  width: 24px;
  height: 24px;
  border: none;
  background-color: white;
`;

export const RadinLabel = styled.label`
  font-size: 16px;
  margin-right: 20px;
  font-weight: 500;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

//등록 버튼
export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "#ffd600" : "#BDBDBD")};
  font-size: 16px;
  padding: 14px 60px 14px 60px;
  color: black;
  border: none;
  font-weight: 500;
  cursor: pointer;
`;
export const ErrMessage = styled.div`
  margin-top: 5px;
  color: red;
`;
