import useSWR from 'swr';
import { request } from 'graphql-request';

const graphqlQuery = `{
  GetUser: {
    user: {
      name
    }
  }
}`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export function Index() {
  const { data } = useSWR('http://localhost:3333/user', fetcher);

  const { data: graphqlData } = useSWR(graphqlQuery, (query) =>
    request('http://localhost:3333/graphql', query)
  );

  return (
    <div>
      With Rest API: {data?.name}
      <br />
      With Graphql API: {graphqlData?.user.name}
    </div>
  );
}

export default Index;
