const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith(".tsx")) {
      callback(fullPath);
    }
  });
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const jsxTextRegex = />((?:[^<>{}"]*['"][^<>{}"]*)+)</g;

  const updatedContent = content.replace(jsxTextRegex, (match, p1) => {
    const escaped = p1.replace(/\n/g, "").trim();
    return `>{"${escaped}"}</`;
  });

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log(`✅ Corrigé : ${filePath}`);
  }
}

const projectRoot = process.argv[2] || ".";
walkDir(path.resolve(projectRoot), fixFile);
