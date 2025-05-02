import express from "express";
import cors from "cors";
import createApolloServer from "./graphql";
import { startStandaloneServer } from "@apollo/server/standalone";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN!,
  methods: "GET, PUT, POST, DELETE",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const startApolloServer = async () => {
  const server = await createApolloServer();

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();
