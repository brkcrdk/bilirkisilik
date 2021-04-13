import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  //Graphcms'in dashboardu=> settings=>API Access=>endpoint
  uri: process.env.NEXT_PUBLIC_API_KEY,
  cache: new InMemoryCache(),
});

export default client;
