// deno-lint-ignore-file
import fs from "node:fs";
import archiver from "npm:archiver@7.0.1";

function zipFloder(src: string, des: string, cb: Function) {
  const output = fs.createWriteStream(src);
  const zipArchive = archiver("zip");

  output.on("close", function () {
    cb();
  });

  zipArchive.pipe(output);
  zipArchive.bulk([{ cwd: src, src: ["**/*"], expand: true }]);

  // deno-lint-ignore no-explicit-any
  zipArchive.finalize(function (err: any, bytes: any) {
    if (err) {
      cb(err);
    }
  });
}

zipFloder("./aaa", "./aaa.zip", (err: any) => {
  if (err) {
    console.log("oh no!", err);
  } else {
    console.log("EXCELLENT");
  }
});
