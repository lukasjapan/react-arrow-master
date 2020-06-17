const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/sandbox.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/sandbox.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 9000,
  },
};
