import { ApolloServer } from "@apollo/server";
import { userSchema } from "../graphql/user/index";

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs: `#graphql

    ${userSchema.typeDefs}
    
    type Query {
      ${userSchema.queries}
    }
    
    
  `,

    resolvers: {
      Query: {
        ...userSchema.resolvers.queries,
      },
    },
  });

  return server;
}

export default createApolloServer;
