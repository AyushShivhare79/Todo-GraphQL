import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "mongoose";

// const typeDefs = `#graphql
//   type Book {
//     title: String
//     author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs: `#graphql  

        type Query{
            hello: String
        }

  `,
    resolvers: {
      Query: {
        hello: () => "Hello world!",
      },
    },
  });

  await server.start();

  return server;
}
