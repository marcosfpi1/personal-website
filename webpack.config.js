const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,
    
    output: {
        path: path.resolve(__dirname, "public"),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html"
            }
        )
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        static: "./public",
        hot: true,
    },
}