import Header from "./header";
import Banner from "./banner";
import Nav from "./nav";
import Footer from "./footer";
import styled from "@emotion/styled";

export default function Layout(props) {
  return (
    <div>
      <Container>
        <Wrapper>
          <Header />
          <Banner />
          <Nav />
        </Wrapper>
      </Container>
      {props.children}
      <Footer />
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;
