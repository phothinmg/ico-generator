import { globSync } from "glob";
import { basename } from "path";
const iconFiles = globSync("./client/icons/**/*.{png,ico,webmanifest}");

interface Fname {
  fileName: string;
  fileLink: string;
}
const icoFileArray: Array<Fname> = iconFiles.map((file: string) => {
  const fn = basename(file);
  return {
    fileName: `/${fn}`,
    fileLink: `./${file}`,
  };
});

export { icoFileArray };
