import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import upload from "./server/upload.ts";
import home from "./client/home.tsx";
import { icoFileArray } from "./server/routes/icons.ts";

const app = new Hono();

app.use("/style.css", serveStatic({ path: "./client/style.css" }));
app.use("/favicon.png", serveStatic({ path: "./client/favicon.png" }));

icoFileArray.map((i) => {
  app.use(i.fileName, serveStatic({ path: i.fileLink }));
});

app.route("/", home);

app.route("/upload", upload);

export default app;
