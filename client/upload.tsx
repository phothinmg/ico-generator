import type { FC } from "hono/jsx";
import { html } from "hono/html";
const ImageUpload: FC = () => {
  return (
    <div>
      <p>
        <b>Upload your image</b>
      </p>
      <div class="upload">
        <input type="file" id="images" name="file" accept="image/*" required />
        <button type="submit" class="subbtn" id="up">
          Upload
        </button>
      </div>

      <p class="lod" id="lod"></p>
      {html`
        <script>

          const input = document.querySelector("#images");
          const btn = document.getElementById("up");
          const info = document.getElementById("lod");
          const upload = async () => {
            try {
              info.innerText = "generating......";
              const data = new FormData();
              data.append("file", input.files[0]);

              const res = await fetch("http://localhost:8000/upload", {
                method: "POST",
                body: data,
              });

              const responseText = await res.text();
              info.innerText = responseText;
            } catch (error) {
              console.error(error);
              info.innerText = "Error during generation";
            }
          };

          btn.addEventListener("click", upload);
        </script>
      `}
    </div>
  );
};

export default ImageUpload;
