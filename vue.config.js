const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

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
