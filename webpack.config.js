// 导入 path模块
const path = require("path");

// 暴露出去
module.exports = {
  // 入口
  entry: "./src/index.js",
  // 出口
  output: {
    //  打包出来的文件名
    filename: "main.js",
    // 打包出来的保存路径
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    // 规则
    rules: [
      {
        // 以.css结尾的文件
        test: /\.css$/,
        // 通过 style-loader 和 css-loader去解析
        use: ["style-loader", "css-loader"]
      },
      {
        // 所有 png svg jpg gif 结尾的文件
        test: /\.(png|svg|jpg|gif)$/,
        // 用 file-loader去解析
        use: ["file-loader"]
      },
      {
        // 以less结尾的文件
        test: /\.less$/,
        // 使用 style-loader css-loader less-loader 去解析
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        // 以scss结尾的文件
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  }
};
