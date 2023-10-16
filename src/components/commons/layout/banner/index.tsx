import { Carousel } from "antd";
import Image from "next/image";
import styled from "@emotion/styled";

export default function Banner() {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "#ffffff",
  };

  return (
    <div>
      <Wrapper>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <Image
                src="/spongbob.jpg"
                alt="스폰지밥 이미지"
                width={1200}
                height={400}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src="/spongbob2.jpg"
                alt="스폰지밥 이미지"
                width={1200}
                height={400}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              <Image
                src="/spongbob.jpg"
                alt="스폰지밥 이미지"
                width={1200}
                height={400}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              <Image
                src="/spongbob2.jpg"
                alt="스폰지밥 이미지"
                width={1200}
                height={400}
              />
            </h3>
          </div>
        </Carousel>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
