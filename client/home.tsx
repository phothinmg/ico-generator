import { Hono } from "hono";
import type { FC } from "hono/jsx";
import Layout from "./layout.tsx";
import ImageUpload from "./upload.tsx";

const home = new Hono();

const Home: FC = () => {
  return (
    <Layout title="Ico Generator">
      <h2>Image to favicon generator</h2>
      <hr />
      <ImageUpload />
    </Layout>
  );
};

home.get("/", (c) => c.html(<Home />));
export default home;
