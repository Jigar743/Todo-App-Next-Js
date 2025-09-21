import CustomeThemeProvider from "@/Client/Components/ContextProvider/CustomeThemeProvider";
import { GlobalStyle } from "@/Styles/Global.styled";
import MainLayout from "@/Client/Components/Layout/MainLayout/MainLayout";
import { store } from "@/Client/Store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "@/styles/globals.css";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

// Middleware to add headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token"); // or wherever you store it
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "Jigar Modi",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
