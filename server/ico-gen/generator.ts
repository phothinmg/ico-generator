import type { IMagickImage } from "image_magick";
import { ImageMagick, MagickFormat, MagickGeometry } from "image_magick";

export interface GeneratorType {
  data: Uint8Array;
  fpath: string;
  width: number;
  height: number;
  outFormat:
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
}

/**
 * Generates an image file with the specified dimensions and format.
 * @param {GeneratorType} options - The options for generating the image.
 * @param {Uint8Array} options.data - The image data.
 * @param {string} options.fpath - The file path to save the generated image.
 * @param {number} options.width - The width of the generated image.
 * @param {number} options.height - The height of the generated image.
 * @param {"png" | "ico" | "jpg" | "jpeg" | "gif" | "svg" | "tiff" | "tif" | "webp" | "bmp"} options.outFormat - The format of the generated image.
 * @returns {Promise<void>} A promise that resolves when the image is generated and saved.
 * @throws {Error} If the specified output format is not supported.
 */
export async function imgGenerator(options: GeneratorType): Promise<void> {
  const { data, fpath, width, height, outFormat } = options;
  let ofm: MagickFormat;
  switch (outFormat) {
    case "bmp":
      ofm = MagickFormat.Bmp;
      break;
    case "png":
      ofm = MagickFormat.Png;
      break;
    case "ico":
      ofm = MagickFormat.Ico;
      break;
    case "jpg":
    case "jpeg":
      ofm = MagickFormat.Jpg;
      break;
    case "gif":
      ofm = MagickFormat.Gif;
      break;
    case "svg":
      ofm = MagickFormat.Svg;
      break;
    case "tiff":
    case "tif":
      ofm = MagickFormat.Tiff;
      break;
    case "webp":
      ofm = MagickFormat.WebP;
      break;
    default:
      throw new Error(`Unsupported output format: ${outFormat}`);
  }
  if (width <= 0 || height <= 0) {
    throw new Error(
      `Invalid dimensions: width (${width}) and height (${height}) must be positive numbers`
    );
  }
  const sizingData = new MagickGeometry(width, height);
  sizingData.ignoreAspectRatio = true;
  await ImageMagick.read(data, async (image: IMagickImage) => {
    try {
      image.resize(sizingData);
      await image.write(ofm, async (data: Uint8Array) => {
        await Deno.writeFile(fpath, data);
      });
    } catch (error) {
      console.error(`Error processing image:`, error);
      throw error;
    }
  });
}
