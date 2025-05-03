import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import "./App.css";
import { useEffect } from "react";

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_SERVER_URL!,
    cache: new InMemoryCache(),
  });

  const call = async () => {
    client
      .query({
        query: gql`
          query {
            book {
              name
            }
          }
        `,
      })
      .then((result) => {
        console.log(result);
      });
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
