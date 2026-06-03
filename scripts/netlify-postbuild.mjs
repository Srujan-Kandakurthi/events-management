import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

for (const file of ["404.html", "_not-found.html"]) {
  const filePath = path.join(outDir, file);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

const notFoundDir = path.join(outDir, "_not-found");

if (fs.existsSync(notFoundDir)) {
  fs.rmSync(notFoundDir, { recursive: true, force: true });
}
