const webpack = require("webpack");
const path = require("path");
const execSync = require("child_process").execSync;

function resolve(dir) {
  return path.join(__dirname, dir);
}

process.env.VUE_APP_GIT_HASH = execSync(
  "git log -1 --pretty=format:'%h'"
).toString();

process.env.VUE_APP_GIT_TAG = (() => {
  try {
    return execSync("git describe --exact-match --abbrev=0")
      .toString()
      .replace("\n", "");
  } catch {
    return "";
  }
})();

// console.log("www-3", process.env.VUE_APP_GIT_HASH, process.env.VUE_APP_GIT_TAG);

module.exports = {
  configureWebpack: {
    // ...some
    plugins: [
      new webpack.ProvidePlugin({
        _M: resolve("./src/store/modules/mutations.js")
      })
    ]
  }
};
