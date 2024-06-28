

const input = document.querySelector("#images");
const btn = document.getElementById("up");
const info = document.getElementById("lod");
const upload = async () => {
  try {
    info.innerText = "generating......";
    const data = new FormData();
    data.append("file", input.files[0]);

    const res = await fetch("https://icogenerator.deno.dev/upload", {
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

btn.addEventListener("click", await upload());