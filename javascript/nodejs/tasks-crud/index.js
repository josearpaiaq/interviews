import express from "express";
import { router } from "./router/index.js";
import { errorMiddleware } from "./middlewares/index.js";

const app = express();
const port = 3000;

app.use(express.json());

// Hello world route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", router);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
