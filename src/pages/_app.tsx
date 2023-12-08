import CustomeThemeProvider from "@/Components/ContextProvider/CustomeThemeProvider";
import { GlobalStyle } from "@/styles/Global.styled";
import MainLayout from "@/Components/Layout/MainLayout/MainLayout";
import { store } from "@/Store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomeThemeProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ApolloProvider>
      </Provider>
    </CustomeThemeProvider>
  );
}
