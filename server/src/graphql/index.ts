import { ApolloServer } from "@apollo/server";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs: `#graphql
    type Book {
      title: String
      author: String
    }
  
    type Query {
      books: [Book]
    }
  `,

    resolvers: {
      Query: {
        books: () => books,
      },
    },
  });

  return server;
}

export default createApolloServer;
