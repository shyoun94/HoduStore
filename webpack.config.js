const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 이 부분을 추가합니다.
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      components: path.resolve(__dirname, "src/component/"),
      api: path.resolve(__dirname, "src/API/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // 출력 파일 이름 설정
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 이 부분을 추가합니다.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), // public 폴더의 index.html 파일을 템플릿으로 사용합니다.
      publicPath: "/", // 이 부분이 %PUBLIC_URL%에 해당합니다.
    }),
    new FaviconsWebpackPlugin({
      logo: "public/favicon.ico",
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: "./src/assets/MokImg",
    //     to: "./assets/images/",
    //   },
    // ]),
    new WebpackManifestPlugin(),
  ],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
};
