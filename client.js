import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/ckn3gap2f5m3501xs9y7ec9au/master',
  cache: new InMemoryCache(),
});

export default client;
