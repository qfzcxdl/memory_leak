const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyPlugin = require("uglifyjs-webpack-plugin");

const config = {
  mode: "production",
  entry: path.join(__dirname, "../cli/prod.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist/ssr/")
  },
  node: {
    __dirname: true
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            "react",
            "stage-2",
            [
              "env",
              {
                targets: {
                  node: "current"
                }
              }
            ]
          ]
        },
        exclude: [path.join(__dirname, "../node_modules/")]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader"
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: "none",
  optimization: {
    minimizer: [
      new UglifyPlugin({
        uglifyOptions: {
          ecma: 8,
          compress: {
            inline: 1
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};

module.exports = config;
