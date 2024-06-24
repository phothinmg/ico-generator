import type { IcoType, IconOutType } from "./icopack_gen.ts";
import { imgGenerator } from "./generator.ts";
import { icopack_gen } from "./icopack_gen.ts";
import loadImgData from "./load_image_data.ts";
import { manifest, fileText } from "./text.ts";
import { initialize } from "../image-magick/mod.ts";
export async function icoGen(file: string | File): Promise<void> {
  await initialize();

  // Load image data
  const fileData: Uint8Array = await loadImgData(file);

  // Generate browser-ico object
  const fileArray: IconOutType = await icopack_gen();

  // Generate the ico files with different sizes
  const promises = fileArray.icoArray.map((file: IcoType) => 
    imgGenerator({
      data: fileData,
      fpath: file.fpath,
      width: file.size,
      height: file.size,
      outFormat: file.format,
    })
  );
  await Promise.all(promises);

  // Generate site.webmanifest for the icons
  const mfPath: string = `./${fileArray.outDir}/site.webmanifest`;

  // Example text file
  const textPath: string = `./${fileArray.outDir}/example.txt`;

  // Write the manifest file
  await Deno.writeTextFile(mfPath, manifest);

  // Write the example text file
  await Deno.writeTextFile(textPath, fileText);
}
