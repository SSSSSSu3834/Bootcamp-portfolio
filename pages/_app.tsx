import "../styles/globals.css";
import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/Apollo";
import Layout from "../src/components/commons/layout";
import { GlobalStyles } from "../styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </div>
  );
}
