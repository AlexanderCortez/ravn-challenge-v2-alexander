import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';

const { REACT_APP_GRAPHQL_SERVER } = process.env;

const httpLink = createHttpLink({ uri: REACT_APP_GRAPHQL_SERVER });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client;
