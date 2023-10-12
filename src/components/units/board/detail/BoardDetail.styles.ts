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
  padding: 60px 103px 100px 103px;
  width: 1200px;
  height: 1602px;
  margin: 0;
  box-shadow: 0px 0px 10px gray;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: Noto Sans CJK KR;
  margin-left: 12px;
`;
export const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
  font-family: Noto Sans CJK KR;
  margin-left: 12px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Line = styled.div`
  width: 996px;
  height: 1px;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-weight: 700;
  font-size: 36px;
  margin-top: 80px;
  width: 100%;
`;
export const Content = styled.div`
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  margin-top: 40px;
`;
export const Btn = styled.button`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  padding: 14px 60px 14px 60px;
  color: black;
  border: 1px solid #bdbdbd;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  margin-right: 24px;
  margin-top: 101px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
