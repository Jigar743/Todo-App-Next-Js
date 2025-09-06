import CustomeThemeProvider from "@/Client/Components/ContextProvider/CustomeThemeProvider";
import { GlobalStyle } from "@/Styles/Global.styled";
import MainLayout from "@/Client/Components/Layout/MainLayout/MainLayout";
import { store } from "@/Client/Store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache({
    addTypename: false,
  }),
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
