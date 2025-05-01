import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, PUT, POST, DELETE",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// app.use("/graphql", )

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
