import { Hono } from "hono";
import { icoGen } from "./image-magick/mod.ts";

// const imgArray = [
//   "image/png",
//   "image/jpeg",
//   "image/webp",
//   "image/avif",
//   "image/gif",
// ];

const upload = new Hono();

upload.post("/", async (c) => {
  const body = await c.req.parseBody();
  const file = body["file"];

  await icoGen(file);

  return c.text("Successfuly Generated");
});

export default upload;
