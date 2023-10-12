import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  width: 1200px;
  height: 52px;
  border-top: 1px solid black;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const List = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 1200px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TitleCLick = styled.span`
  cursor: pointer;
`;

export const NewBtn = styled.button`
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
  border-color: #f2f2f2;
  width: 171px;
  height: 52px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 40px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 1200px;
`;

export const Line = styled.div`
  width: 1200px;
  border-top: 1px solid black;
`;
