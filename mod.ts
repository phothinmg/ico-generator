import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import upload from "./server/upload.ts";
import home from "./client/home.tsx";

const app = new Hono();

app.use("/style.css", serveStatic({ path: "./client/style.css" }));

app.route("/", home);

app.route("/upload", upload);

export default app;
