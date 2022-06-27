const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let isDev = process.env.env_mode == 'dev';
let cssLoaders = {
    loader: "css-loader",
    options:{
        importLoaders: 1,
    }
}

module.exports = {
    mode: isDev ? "development" : "production",
    watch: true,
    entry:[
        "./css/app.scss",
        "./css/app.css",
        "./js/page0001.js",
        "./js/app.js"],
    output:{
        path:path.resolve(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist/",
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
        static: './dist',
      },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/i,
            use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoaders] //["style-loader", "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
          },
          {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)$/i,
            type: 'asset/inline'
          },
        ]
      },
      plugins: [].concat(isDev ? [] : [new MiniCssExtractPlugin()]),
}