import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function ApolloSetting(props) {
  const client = new ApolloClient({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백앤트 데이터 임시로 저장하기
  });

  return (
    <div>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </div>
  );
}
