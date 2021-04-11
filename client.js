import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/cknbxmfzxgfbh01xm6dti8u4l/master',
  cache: new InMemoryCache(),
});

export default client;
