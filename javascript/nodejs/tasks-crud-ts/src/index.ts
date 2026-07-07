import express, { Request, Response } from "express";
import { router } from "@/src/router/index.ts";
import { errorMiddleware } from "@/src/middlewares/index.ts";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/", router);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
