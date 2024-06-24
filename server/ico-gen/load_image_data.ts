/**
 * Loads image data from a file.
 *
 * @param {string} fpath - The path of the image file.
 * @return {Promise<Uint8Array>} A promise that resolves to the image data as a `Uint8Array`.
 * @throws {Error} If the file extension is not supported.
 */
export default async function loadImgData(
  fpath: string | File
): Promise<Uint8Array> {
  if (fpath instanceof File) {
    const arrayBuffer = await fpath.arrayBuffer();
    return new Uint8Array(arrayBuffer);
  } else if (typeof fpath === "string") {
    return await Deno.readFile(fpath);
  } else {
    throw new Error("Invalid file path type");
  }
}
