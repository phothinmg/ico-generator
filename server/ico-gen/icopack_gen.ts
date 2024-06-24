export interface IcoType {
  format:
    | "png"
    | "ico"
    | "jpg"
    | "jpeg"
    | "gif"
    | "svg"
    | "tiff"
    | "tif"
    | "webp"
    | "bmp";
  fpath: string;
  size: number;
}
export type IconTypeArray = Array<IcoType>;
export interface IconOutType {
  icoArray: IconTypeArray;
  outDir: string;
}
/**
 * Generates an array of objects representing the different sizes and formats required for browser icons.
 * @returns {Promise<IcoArrayType>} An array of objects representing the different sizes and formats required for browser icons.
 */
export async function icopack_gen(): Promise<IconOutType> {
  // Create a temporary directory for storing the output files
  const outDir = await Deno.makeTempDir({
    dir: "./",
  });

  // Return an array of objects representing the different sizes and formats required for browser icons
  const icoArray: IconTypeArray = [
    // Favicon
    {
      format: "ico",
      fpath: `./${outDir}/favicon.ico`,
      size: 16,
    },
    {
      format: "png",
      fpath: `./${outDir}/favicon-16x16.png`,
      size: 16,
    },
    {
      format: "png",
      fpath: `./${outDir}/favicon-32x32.png`,
      size: 32,
    },
    // Android Chrome
    {
      format: "png",
      fpath: `./${outDir}/android-chrome-192x192.png`,
      size: 192,
    },

    // Apple Touch Icon
    {
      format: "png",
      fpath: `./${outDir}/apple-touch-icon.png`,
      size: 180,
    },

    // Android Chrome (512x512)
    {
      format: "png",
      fpath: `./${outDir}/android-chrome-512x512.png`,
      size: 512,
    },
  ];
  return { icoArray, outDir };
}
