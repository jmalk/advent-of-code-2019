const fsReadFileSync = require("fs").readFileSync;

function readFileSync(path) {
  return fsReadFileSync(path, "utf8");
}

module.exports = readFileSync;
