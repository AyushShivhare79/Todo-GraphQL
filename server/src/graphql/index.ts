import { ApolloServer } from "@apollo/server";
import { connectDB } from "../db/db";
import { typeDefs } from "./typeDefs/index";
import { resolvers } from "./resolvers/index";

async function createApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  connectDB();

  return server;
}

export default createApolloServer;
