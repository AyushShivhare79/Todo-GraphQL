import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_URL!,
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
