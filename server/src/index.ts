import express from "express";
require("dotenv").config();

const app = express();

import fileManaging from "./routes/file/index";

app.use("/files", fileManaging);

const port = process.env.EXPRESS_PORT;
app.listen(port, () => {
  console.log("REST API server ready at: http://localhost:" + port);
});
